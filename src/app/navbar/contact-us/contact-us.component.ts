import { Component, OnInit } from '@angular/core';

import { switchTabFading } from '../navbar.animation';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations: [
    switchTabFading
  ]
})
export class ContactUsComponent implements OnInit {
  switchState: string = 'contact';

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchTab(switchState: string) {
    this.switchState = switchState;
  }
}