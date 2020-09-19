import { Component, Input } from '@angular/core';

import * as CommonUtils from '../utils/common-utils';
import { environment } from '../../../environments/environment';
import { ProductCarouselParams } from './product-carousel-params.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent {
  @Input() carouselData: ProductCarouselParams;
  @Input() data;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = CommonUtils.detectMobile();
  isTablet: boolean = CommonUtils.detectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  carouselItemWidth: number = 160;

  constructor() { }
}
