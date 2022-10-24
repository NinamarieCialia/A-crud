import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactId:any
  contactName:any;
  contactEmail:any;
  contactNumber:any;
  contacts:any;
  currentId:any;
 
  
  constructor(private contactsService:ContactsService) { }
  contactForm = new FormGroup ({
    name: new FormControl ('', [Validators.required,Validators.minLength(5)]),
    email: new FormControl ('', [Validators.required,Validators.email]),
    number: new FormControl ('',[Validators.required,Validators.minLength(11),Validators.maxLength(13)])
  })

  get name(){
    return this.contactForm.get('name')
  }
  get email(){
    return this.contactForm.get('email')
  }
  get number(){
    return this.contactForm.get('number')
  }

  ngOnInit(): void {
    this.fetchAllContacts()
  }

  fetchAllContacts(){
    this.contactsService.getAllContacts().subscribe((res) => {
      this.contacts=res;
    })
  }

  addContact(){
    let newContact = {
      "id":    this.contactId,
      "name":  this.contactName,
      "email": this.contactEmail,
      "number":this.contactNumber
    }
    this.contactsService.addNewContact(newContact).subscribe((res) => {
      alert('Added!')
      console.log(res)
      this.contactForm.reset()
      this.fetchAllContacts()
    }
    )
  }
  update(){
    let updatedContact = {
      "id":    this.contactId,
      "name":  this.contactName,
      "email": this.contactEmail,
      "number":this.contactNumber
    }
    this.contactsService.editContact(this.currentId , updatedContact).subscribe((res) => {
      console.log(res)
      this.fetchAllContacts();
    })
  }
  
  
}
