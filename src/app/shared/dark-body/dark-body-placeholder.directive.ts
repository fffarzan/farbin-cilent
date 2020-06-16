import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDarkBodyPlaceholder]'
})
export class DarkBodyPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
