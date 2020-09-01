import { Injectable } from '@angular/core';
import { MasterProduct } from './master-product.model';

@Injectable({
  providedIn: 'root'
})
export class MasterProductService {
  private masterProduct: MasterProduct;

  setMasterProduct(masterProduct: MasterProduct) {
    this.masterProduct = masterProduct;
  }

  getMasterProduct() {
    return this.masterProduct;
  }
}