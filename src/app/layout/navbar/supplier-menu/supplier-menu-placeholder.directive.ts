import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSupplierMenuPlaceholder]'
})
export class SupplierMenuPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
