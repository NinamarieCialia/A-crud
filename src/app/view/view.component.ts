import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  contacts:any
  //contactId:any
  //contactName:any;
  //contactEmail:any;
  //contactNumber:any;
  
  
  constructor(private contactsService:ContactsService) { }

  ngOnInit(): void {
   this.contactsService.getAllContacts().subscribe((res) => {
  this.contacts=res;
  })
 
    
  //this.contactName 
  //this.contactEmail 
  //this.contactNumber 
  //this.contactId 
  }
  fetchAllContacts() {
    throw new Error('Method not implemented.');
  }
  currentId(currentId: any, updatedContact: { id: any; name: any; email: any; number: any; }) {
    throw new Error('Method not implemented.');
  }

  
}
