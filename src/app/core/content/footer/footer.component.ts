import { Component } from '@angular/core';
import SetLanguage from './lang';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public lang:any;
  public title:any;

  constructor() { }

  ngOnInit() {
    this.title = localStorage.getItem('contact');

    if (localStorage.getItem('selectedLanguage') == 'en') {
      this.lang = SetLanguage.en[0];
    }
    else if (localStorage.getItem('selectedLanguage') == 'vn') {
      this.lang = SetLanguage.vn[0];
    }
    else {
      localStorage.setItem('selectedLanguage', 'en');
      this.lang = SetLanguage.en[0];
    }

  }
}
