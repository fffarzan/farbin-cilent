import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCarouselService {
  products: Product[] = [];

  setProducts(products: Product[]) {
    this.products = products;
  }

  getProducts() {
    return this.products.slice();
  }
}