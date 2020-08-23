import { Injectable } from '@angular/core';
import { ProductCategory } from './product-category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private productCategory: ProductCategory;
  
  setProductCategory(productCat: ProductCategory) {
    this.productCategory = productCat;
  }

  getProductCategory() {
    return this.productCategory;
  }
}