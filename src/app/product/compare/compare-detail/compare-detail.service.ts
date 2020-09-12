import { Injectable } from '@angular/core';

import { ProductProperties } from './product-properties.model';

@Injectable({
  providedIn: 'root'
})
export class CompareDetailService {
  private productsProperties: ProductProperties[];
  private productsTechnicalProperties: ProductProperties[];

  setProductsProperties(props: ProductProperties[]) {
    this.productsProperties = props;
  }

  getProductProperties() {
    return this.productsProperties;
  }

  setProductsTechnicalProperties(props: ProductProperties[]) {
    this.productsTechnicalProperties = props;
  }

  getProductTechnicalProperties() {
    return this.productsTechnicalProperties;
  }
}