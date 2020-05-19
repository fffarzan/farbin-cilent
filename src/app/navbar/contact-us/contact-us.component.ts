import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  animations: [
    trigger('switchTabFading', [
      transition('void => *', [
        style({
          'opacity': 0
        }),
        animate(300)
      ])
    ]),
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
