import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Product } from './product.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ProductCarouselService } from './product-carousel.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCarouselResolverService implements Resolve<Product[]> {
  param: object = {}

  constructor(
    private dataStorageService: DataStorageService,
    private productCarouselService: ProductCarouselService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const products = this.productCarouselService.getProducts();

    if (products.length === 0)
      return this.dataStorageService.fetchProducts(this.param);
    else 
      return products;
  }
}