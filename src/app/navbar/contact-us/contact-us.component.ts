import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations: [
    trigger('switchTab', [
      state('contact', style({
        'opacity': 0,
      })),
      state('about', style({
        'opacity': 0,
      })),
      transition('contanct => about', [
        style({
          'opacity': 0
        }),
        animate(1000)
      ])
    ])
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
