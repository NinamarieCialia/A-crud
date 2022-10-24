import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactId:any;
  contactName:any;
  contactEmail:any;
  contactNumber:any;
  contacts:any;
  currentId: any;
 
  constructor(private contactsService:ContactsService) { }

  ngOnInit(): void {
   this.fetchAllContacts();
  }

  fetchAllContacts(){
    this.contactsService.getAllContacts().subscribe((res) => {
      this.contacts=res;
    })
  }

  delete(id:any){
    this.contactsService.deleteContact(id).subscribe((res) => {
      console.log(res);
      this.fetchAllContacts();
    })    
  }

  edit(contact:any){
    this.contactName = contact.name;
    this.contactEmail = contact.email;
    this.contactNumber = contact.number;
    this.contactId = contact.id;
  }
  
}
