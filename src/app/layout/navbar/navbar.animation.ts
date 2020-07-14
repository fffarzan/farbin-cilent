import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

export const switchTabFading = trigger('switchTabFading', [
  transition('void => *', [
    style({
      'opacity': 0
    }),
    animate(300)
  ])
]);

export const toggleMenu = trigger('toggleMenu', [
  state('in', style({
    'bottom': '-378px'
  })),
  transition(':enter', [
    style({
      'bottom': '-378px'
    }),
    animate(300, style({
      'bottom': '60px'
    }))
  ]),
  transition(':leave', [
    style({
      'bottom': '60px'
    }),
    animate(300, style({
      'bottom': '-378px'
    }))
  ])
]);