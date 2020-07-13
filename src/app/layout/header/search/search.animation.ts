import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

import { ExtensionMethodService } from '../../../shared/extension-method.service';

export const searchTemplateState = trigger('searchTemplateState', [
  state('open', style({
    'right': '0'
  })),
  state('close', style({
    'right': '-100%'
  })),
  transition('open <=> close', animate(300))
]);