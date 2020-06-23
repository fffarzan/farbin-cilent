import { Component, OnInit } from '@angular/core';

import { switchTabFading, toggleMenu } from '../navbar.animation';

@Component({
  selector: 'app-contact-menu',
  templateUrl: './contact-menu.component.html',
  styleUrls: ['./contact-menu.component.css'],
  animations: [
    switchTabFading,
    toggleMenu
  ],
  host: { '[@toggleMenu]': 'in' }
})
export class ContactMenuComponent implements OnInit {
  switchState: string = 'contact';

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchTab(switchState: string) {
    this.switchState = switchState;
  }
}