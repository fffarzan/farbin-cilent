import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

let width = window.innerWidth,
  height = window.innerHeight,
  screenHeight = window.screen.height,
  marginTopSpace = 0,
  marginLeftSpace = 0,
  startXTouched = 0,
  startYTouched = 0;

export const init = trigger('init', [
  // state('initHeight', style({
  //   'min-height': height - 75
  // })),
  // transition('void => void', animate(0))
])