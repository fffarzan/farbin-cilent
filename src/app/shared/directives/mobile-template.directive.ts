import { Directive, OnInit, Input, HostBinding, Renderer2, ElementRef } from '@angular/core';

import { ProductCarouselParams } from '../components/product-carousel/product-carousel-params.model';

@Directive({
  selector: '[appMobileTemplate]'
})
export class MobileTemplateDirective implements OnInit {
  @Input('appMobileTemplate') parameters: any;
  @HostBinding('style.width') itemWidth: string;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.itemWidth = this.setCarouselItemsWidth(this.parameters);
  }

  private setCarouselItemsWidth(param: any): string {
    let screenWidth = window.innerWidth;

    if (screenWidth < param.mobileOptions.mobileItems.maxSize)
      return (screenWidth / param.mobileOptions.mobileItems.items) + 'px';
    else if (screenWidth > param.mobileOptions.mobileItems.maxSize) {
      if (screenWidth < param.mobileOptions.tabletItems.maxSize)
        return (screenWidth / (2 * param.mobileOptions.tabletItems.items)) + 'px';
      else
        return (screenWidth / param.mobileOptions.desktopItems.items) + 'px';
    }
  }
}
