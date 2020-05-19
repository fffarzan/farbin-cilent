import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('showContactMenu', [
      transition(':enter', [
        style({
          'bottom': '-378px'
        }),
        animate(300, style({
          'bottom': '60px'
        }),)
      ]),
      transition(':leave', [
        style({
          'bottom': '60px'
        }),
        animate(300, style({
          'bottom': '-378px'
        }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  toggleContactMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleContactMenu() {
    this.toggleContactMenu = !this.toggleContactMenu;
  }
}
