import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ContactService } from '../service/contact.service';

@Component({
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  name: string;
  animal: string;
  contacts = []

  constructor(private modalController: ModalController, private contactService: ContactService) { }

  async ngOnInit(){
    this.contacts = JSON.parse( await this.contactService.retrieveUsers());
  }

  async addContact(){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { }
    }); 
    modal.onDidDismiss()
      .then((retval) => {
        if (retval.data !== undefined){
          this.createContacts(retval.data)
        }
   });
    return modal.present();
  }

  createContacts(val){
    this.contacts.push(val);
    this.contactService.createUsers(this.contacts)
  }

  delete(i){
    this.contacts.splice(i, 1);
    this.contactService.createUsers(this.contacts)
  }


  async edit(i){
 
    const editmodal = await this.modalController.create({
      component: ModalPage,
      componentProps: { 
        name: this.contacts[i].name,
        animal: this.contacts[i].animal,
        }
    });
    editmodal.onDidDismiss()
      .then((retval) => {
        this.updatecontacts(i, {name: retval.data.name, animal: retval.data.animal})
        
        this.contactService.createUsers(this.contacts)
   });
     return editmodal.present();
  }

  updatecontacts(index, data){
    this.contacts[index].name = data.name;
    this.contacts[index].animal = data.animal;
  }

}
