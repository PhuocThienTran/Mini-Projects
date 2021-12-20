import { Component, OnInit } from '@angular/core';
import { NavParams,ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  name: string;
  animal: string;

  constructor(private navParams:NavParams,private modalController:ModalController) { }

  ngOnInit() {
    this.name = this.navParams.get('name');
    this.animal = this.navParams.get('animal');
  }

  closemodal(){
    this.modalController.dismiss({name:this.name,animal:this.animal});
  }

}
