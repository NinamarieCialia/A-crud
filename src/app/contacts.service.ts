import { EventEmitter, Injectable,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  put(currentId: any, updatedContact: { id: any; name: any; email: any; number: any; }) {
    throw new Error('Method not implemented.');
  }

  contactsApi = ' http://localhost:3000/contacts';
  contacts:any;
  @Input() contact: ContactsService|null=null;
  constructor(private http:HttpClient) { }

  getAllContacts(){
     return this.http.get(this.contactsApi);
    }

  addNewContact(contact:any){
  return this.http.post(this.contactsApi , contact )
  }

  deleteContact(id:any) {
    return this.http.delete(`${this.contactsApi}/${id}`)
  }
  editContact(id:any , contact:any) {
    return this.http.put(`${this.contactsApi}/${id}` , contact)
  }
}
