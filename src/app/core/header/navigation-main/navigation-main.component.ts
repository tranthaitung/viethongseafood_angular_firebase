import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '../../../account/shared/auth.service';

import { User } from '../../../models/user.model';

import Navbar from '../../../translate';

@Component({
  selector: 'app-navigation-main',
  templateUrl: './navigation-main.component.html',
  styleUrls: ['./navigation-main.component.scss']
})
export class NavigationMainComponent implements OnInit, OnDestroy {
  public user: User;
  private authSubscription: Subscription;
  public navbar_en: any;
  public navbar_vn: any;
  public navbar: any;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.navbar_en = Navbar.en[0];
    this.navbar_vn = Navbar.vn[0];

    if (localStorage.getItem("selectedLanguage") === null) {
      localStorage.setItem("selectedLanguage", 'en');
    }

    let currentLang = localStorage.getItem('selectedLanguage');
    
    if (currentLang == 'en') {
      this.navbar = this.navbar_en;
    } else if (currentLang == 'vn') {
      this.navbar = this.navbar_vn;
    }

    // localStorage.setItem('about', this.navbar['about']);
    // localStorage.setItem('about_', this.navbar['about_']);
    // localStorage.setItem('products', this.navbar['products']);
    // localStorage.setItem('aquaculture', this.navbar['aquaculture']);
    // localStorage.setItem('news', this.navbar['news']);
    // localStorage.setItem('contact', this.navbar['contact']);
    // localStorage.setItem('recruitment', this.navbar['recruitment']);
    // localStorage.setItem('market', this.navbar['market']);
  
    // this.authService.user.subscribe((user) => {
    //   this.user = user;
    // });
  }

  setLanguage(lang: String) {

    let currentLang = localStorage.getItem('selectedLanguage');
    if (currentLang == lang) {
      return;
    }

    if (lang == 'en') {
      this.navbar = this.navbar_en;
    } else if (lang == 'vn') {
      this.navbar = this.navbar_vn;
    }

    localStorage.setItem('selectedLanguage', this.navbar['id']);
    localStorage.setItem('about', this.navbar['about']);
    localStorage.setItem('about_', this.navbar['about_']);
    localStorage.setItem('products', this.navbar['products']);
    localStorage.setItem('aquaculture', this.navbar['aquaculture']);
    localStorage.setItem('news', this.navbar['news']);
    localStorage.setItem('contact', this.navbar['contact']);
    localStorage.setItem('recruitment', this.navbar['recruitment']);
    localStorage.setItem('market', this.navbar['market']);


    // localStorage.getItem('selectedLanguage');
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
