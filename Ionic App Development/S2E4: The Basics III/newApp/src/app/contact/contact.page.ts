import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {

  name: string;
  animal: string;

  contacts = 
  [
    {name:'Barnaby', animal: "the Pup"},
    {name: 'Gina', animal: "the Cat"},
    {name: 'Hailey', animal: "the Elephant"},
    {name: 'Ibini', animal: "the Butterfly"},
  ]

  constructor(private modalController: ModalController) { }

  async addContact(){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { }
    }); 
    modal.onDidDismiss()
      .then((retval) => {
        if (retval.data !== undefined){
          this.contacts.push(retval.data)
        }
   });
    return modal.present();
  }


  delete(i:number){
    this.contacts.splice(i,1);
  }
  
  async edit(i:number){
    const editmodal = await this.modalController.create({
      component: ModalPage,
      componentProps: { 
        name: this.contacts[i].name,
        animal:this.contacts[i].animal
        }
    });

    editmodal.onDidDismiss()
      .then((retval) => {  
        this.contacts[i].name = retval.data.name;
        this.contacts[i].animal = retval.data.animal;
   });
     return editmodal.present();
  }

}
