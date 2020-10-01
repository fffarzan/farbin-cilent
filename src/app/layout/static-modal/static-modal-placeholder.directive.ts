import { ViewContainerRef, Directive } from '@angular/core';

@Directive({
  selector: '[appStaticModalPlaceholder]'
})
export class StaticModalPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}