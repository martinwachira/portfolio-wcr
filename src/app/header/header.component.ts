import { Component, OnInit, HostBinding, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../app.component.css'
  ]
})
export class HeaderComponent implements OnInit {
  title = 'Martin Wachira';
  isFixedNavbar;
  @HostBinding('class.navbar-opened') navbarOpened = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

  scroll() {
    
  }

}
