import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ExtensionMethodService } from '../extension-method.service';
import { Product } from './product.model';
import { ProductCarouselParams } from './product-carousel-params.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent {
  @Input() carouselData: ProductCarouselParams;
  @Input() data;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  carouselItemWidth: number = 160;

  constructor(private extensionMethodService: ExtensionMethodService) { }
}
