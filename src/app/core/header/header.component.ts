import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from '../../account/shared/auth.service';
import { OffcanvasService } from '../shared/offcanvas.service';

import { User } from '../../models/user.model';

import Navbar from '../../translate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription;
  public user: User;
  public showSearch;

  public navbar_en: any;
  public navbar_vn: any;
  public navbar: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private offcanvasService: OffcanvasService
  ) {}

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

    localStorage.setItem('about', this.navbar['about']);
    localStorage.setItem('about_', this.navbar['about_']);
    localStorage.setItem('products', this.navbar['products']);
    localStorage.setItem('aquaculture', this.navbar['aquaculture']);
    localStorage.setItem('news', this.navbar['news']);
    localStorage.setItem('contact', this.navbar['contact']);
    localStorage.setItem('recruitment', this.navbar['recruitment']);
    localStorage.setItem('market', this.navbar['market']);

    this.authSubscription = this.authService.user.subscribe((user) => {
      this.user = user;
    });
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

    window.location.reload();

    // localStorage.getItem('selectedLanguage');
  }
  
  public onLogOut(e: Event) {
    this.authService.signOut();
    this.router.navigate(['/register-login']);
    e.preventDefault();
  }

  public onMenuToggle(e: Event) {
    this.offcanvasService.openOffcanvasNavigation();
    e.preventDefault();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
