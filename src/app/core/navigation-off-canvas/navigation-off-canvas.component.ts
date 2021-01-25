import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from '../../account/shared/auth.service';
import { OffcanvasService } from '../shared/offcanvas.service';

import { User } from '../../models/user.model';
import Navbar from '../../translate';

@Component({
  selector: 'app-navigation-off-canvas',
  templateUrl: './navigation-off-canvas.component.html',
  styleUrls: ['./navigation-off-canvas.component.scss']
})
export class NavigationOffCanvasComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription;
  public user: User;

  public navbar_en: any;
  public navbar_vn: any;
  public navbar: any;

  constructor(
    public offcanvasService: OffcanvasService,
    public authService: AuthService,
    private router: Router
  ) { }

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

    this.authSubscription = this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }

  public onLogout(e: Event) {
    this.offcanvasService.closeOffcanvasNavigation();
    this.authService.signOut();
    this.router.navigate(['/register-login']);
    e.preventDefault();
  }

  public onNavigationClick() {
    this.offcanvasService.closeOffcanvasNavigation();
    // setTimeout(() => {                          
    //   this.offcanvasService.closeOffcanvasNavigation();
    // }, 500);
  }

  public onDropdownClick() {
    var items: any = document.getElementsByClassName('dropdown-container');
    for (let i = 0; i < items.length; i++) {
      let element = items[i];
      if (element.style.display === "block") {
        element.style.display = "none";
      } else {
        element.style.display = "block";
      }
    }
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
