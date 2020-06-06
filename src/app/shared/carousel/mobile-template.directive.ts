import { Directive, OnInit, Input } from '@angular/core';

import { ProductCarouselParams } from './product-carousel/product-carousel-params.model';

@Directive({
  selector: '[appMobileTemplate]'
})
export class MobileTemplateDirective implements OnInit {
  @Input('appMobileTemplate') parameters: ProductCarouselParams;

  constructor() { }

  ngOnInit() {
    // this.setCarouselItems();
  }

  // setCarouselItems() {
  //   if ($(window).width() < this.parameters.productCarouselOptions.itemsMobile.maxSize) {
  //     return  {
  //       'width': $(window).width() / this.parameters.productCarouselOptions.itemsMobile.items + 'px',
  //     };
  //   } else if ($(window).width() > this.parameters.productCarouselOptions.itemsMobile.maxSize) {
  //     if ($(window).width() < this.parameters.productCarouselOptions.itemsTablet.maxSize) {
  //       return {
  //         'width': $(window).width() / (2 * this.parameters.productCarouselOptions.itemsTablet.items) + 'px',
  //       };
  //     } else {
  //       return {
  //         'width': $(window).width() / this.parameters.productCarouselOptions.itemsDesktop.items + 'px',
  //       };
  //     };
  //   };
  // }
}
