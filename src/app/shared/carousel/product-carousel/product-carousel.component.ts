import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { ExtensionMethodService } from '../../extension-method.service';
import { Product } from './product.model';
import { DataStorageService } from '../../data-storage.service';
import { ProductCarouselService } from './product-carousel.service';
import { ProductCarouselParams } from './product-carousel-params.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit {
  products: Product[];
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId = Math.round(Math.random() * 100);
  param: object = {};

  @Input() productCarouselParams: ProductCarouselParams;

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private dataStorageService: DataStorageService,
    private productCarouselService: ProductCarouselService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchProducts(this.param).subscribe(() => this.products = this.productCarouselService.getProducts());
  }
}
