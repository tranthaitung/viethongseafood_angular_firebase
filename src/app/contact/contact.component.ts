import { Component, OnInit } from '@angular/core';
import SetContactFormLanguage from './setLanguage';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public lang:any;
  public title:any;

  constructor() { }

  ngOnInit() {
    this.title = localStorage.getItem('contact');

    if (localStorage.getItem('selectedLanguage') == 'en') {
      this.lang = SetContactFormLanguage.en[0];
    }
    else if (localStorage.getItem('selectedLanguage') == 'vn') {
      this.lang = SetContactFormLanguage.vn[0];
    }
    else {
      localStorage.setItem('selectedLanguage', 'en');
      this.lang = SetContactFormLanguage.en[0];
    }

  }

}
