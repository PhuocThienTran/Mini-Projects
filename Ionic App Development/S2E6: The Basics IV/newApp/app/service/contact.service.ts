import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  name: string;
  animal: string;

  contacts = 
  [
    {name:'Barnaby', animal: "the Pup"},
    {name: 'Gina', animal: "the Cat"},
    {name: 'Hailey', animal: "the Elephant"},
    {name: 'Ibini', animal: "the Butterfly"},
  ]

  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    const storage = await this.storage.create()

    if (await this.storage.get('contacts') == undefined){
      this.storage.set('contacts', JSON.stringify(this.contacts))
    }

  }

  createUsers(contacts){
    this.storage.set('contacts', JSON.stringify(contacts))
  }

  async retrieveUsers(){
    return this.storage.get('contacts')
  }
}
