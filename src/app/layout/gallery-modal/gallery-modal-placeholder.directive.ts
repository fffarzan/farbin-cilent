import { ViewContainerRef, Directive } from '@angular/core';

@Directive({
  selector: '[appGalleryModalPlaceholder]'
})
export class GalleryModalPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}