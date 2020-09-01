import { Component, OnInit, Input } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ProductCategoryCarouselParams } from './product-category-carousel.model';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';

@Component({
  selector: 'app-product-category-carousel',
  templateUrl: './product-category-carousel.component.html',
  styleUrls: ['./product-category-carousel.component.css']
})
export class ProductCategoryCarouselComponent {
  @Input() carouselData: ProductCategoryCarouselParams;
  @Input() data;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  carouselItemWidth: number = 160;

  constructor(private extensionMethodService: ExtensionMethodService) { }
}
