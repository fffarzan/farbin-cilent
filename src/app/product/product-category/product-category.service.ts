import { Injectable } from '@angular/core';

import { ProductCategory } from './product-category.model';
import { ProductCategoryBreadcrumb } from './product-category-breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private productCategory: ProductCategory;
  private productCategoryBreadcrumb: ProductCategoryBreadcrumb;

  setProductCategory(productCat: ProductCategory) {
    this.productCategory = productCat;
  }

  getProductCategory() {
    return this.productCategory;
  }

  setProductCategoryBreadcrumb(breadcrumb: ProductCategoryBreadcrumb) {
    this.productCategoryBreadcrumb = breadcrumb;
  }

  getProductCategoryBreadcrumb() {
    return this.productCategoryBreadcrumb;
  }
}