import { Injectable } from '@angular/core';

import { MasterProduct } from './master-product.model';
import { ProductCategoryBreadcrumb } from '../product-category/product-category-breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class MasterProductService {
  private masterProduct: MasterProduct;
  private masterProductBreadcrumb: ProductCategoryBreadcrumb

  setMasterProduct(masterProduct: MasterProduct) {
    this.masterProduct = masterProduct;
  }

  getMasterProduct() {
    return this.masterProduct;
  }

  setMasterProductBreadcrumb(breadcrumbData: ProductCategoryBreadcrumb) {
    this.masterProductBreadcrumb = breadcrumbData;
  }

  getMasterProductBreadcrumb() {
    return this.masterProductBreadcrumb;
  }
}