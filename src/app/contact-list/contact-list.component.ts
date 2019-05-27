import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts=[];
  constructor(private contact:ContactServiceService) { }

  ngOnInit() {
    this.contacts =this.contact.getContacts();
  }
}
