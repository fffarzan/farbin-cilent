import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ExtensionMethodService } from '../extension-method.service';
import { Product } from './product.model';
import { LayoutDataStorageService } from '../../layout/shared/layout-data-storage.service';
import { ProductCarouselService } from './product-carousel.service';
import { ProductCarouselParams } from './product-carousel-params.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit, OnDestroy {
  products: Product[];
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  param: object = {};
  subscription: Subscription;

  @Input() productCarouselParams: ProductCarouselParams;

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private layoutDataStorageService: LayoutDataStorageService,
    private productCarouselService: ProductCarouselService
  ) { }

  ngOnInit(): void {
    this.subscription = this.layoutDataStorageService.fetchProducts(this.param)
      .subscribe(() => this.products = this.productCarouselService.getProducts());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
