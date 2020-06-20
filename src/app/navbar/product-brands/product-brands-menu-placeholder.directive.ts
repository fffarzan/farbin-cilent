import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appProductBrandsMenuPlaceholder]'
})
export class ProductBrandsMenuPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
