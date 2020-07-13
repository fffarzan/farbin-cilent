import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appContactMenuPlaceholder]'
})
export class ContactMenuPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
