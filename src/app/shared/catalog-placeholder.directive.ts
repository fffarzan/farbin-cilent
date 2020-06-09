import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCatalogPlaceholder]'
})
export class CatalogPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
