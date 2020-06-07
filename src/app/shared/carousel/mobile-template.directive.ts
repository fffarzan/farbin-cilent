import { Directive, OnInit, Input, HostBinding, Renderer2, ElementRef } from '@angular/core';

import { ProductCarouselParams } from './product-carousel/product-carousel-params.model';

@Directive({
  selector: '[appMobileTemplate]'
})
export class MobileTemplateDirective implements OnInit {
  @Input('appMobileTemplate') parameters: ProductCarouselParams;
  @HostBinding('style.width') itemWidth: string;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.setCarouselItems();
  }

  setCarouselItems() {
    let screenWidth = window.innerWidth;

    if (screenWidth < this.parameters.productCarouselOptions.itemsMobile.maxSize) {
      this.itemWidth = screenWidth / this.parameters.productCarouselOptions.itemsMobile.items + 'px';
    } else if (screenWidth > this.parameters.productCarouselOptions.itemsMobile.maxSize) {
      if (screenWidth < this.parameters.productCarouselOptions.itemsTablet.maxSize) {
        this.itemWidth = screenWidth / (2 * this.parameters.productCarouselOptions.itemsTablet.items) + 'px';
      } else {
        this.itemWidth = screenWidth / this.parameters.productCarouselOptions.itemsDesktop.items + 'px';
      }
    }
  }
}
