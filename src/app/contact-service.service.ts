import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor() { }

  getContacts(){ 
    return [
    {"id":1,"name":"Rajesh","city":"Kolkata"},
    {"id":2,"name":"Aarjith","city":"Delhi"},
    {"id":3,"name":"Anjan","city":"Mumbai"},
    {"id":4,"name":"David","city":"Goa"}
  ]

}
}
