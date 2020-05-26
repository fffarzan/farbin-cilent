import { Component, OnInit } from '@angular/core';

import { showTabMenu } from './navbar.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    showTabMenu
  ]
})
export class NavbarComponent implements OnInit {
  toggleContactMenu: boolean = false;
  toggleProductMenu: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onToggleContactMenu() {
    this.toggleContactMenu = !this.toggleContactMenu;
  }

  onToggleProductMenu() {
    this.toggleProductMenu = !this.toggleProductMenu
  }
}
