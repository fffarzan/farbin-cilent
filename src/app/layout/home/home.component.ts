import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductCarouselParams } from '../../shared/components/product-carousel/product-carousel-params.model';
import { LayoutDataStorageService } from '../shared/layout-data-storage.service';
import { ProductCarouselService } from 'src/app/shared/components/product-carousel/product-carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  carouselData: ProductCarouselParams = {
    staticUrl: '',
    dynamicFieldName: 'PicUrl',
    pageUrlDirection: 'DefineDetailProduct',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 } }
    },
    mobileOptions: {
      mobileItems: { maxSize: 500, items: 2.1 },
      tabletItems: { maxSize: 768, items: 0 },
      desktopItems: { maxSize: 1024, items: 4 }
    },
    data: null
  };
  subscription: Subscription;
  products;
  param: object = {};

  constructor(
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
