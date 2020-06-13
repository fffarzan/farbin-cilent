import { Injectable } from '@angular/core';

import { Supplier } from 'src/app/shared/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private suppliers: Supplier[] = [];

  setSuppliers(suppliers: Supplier[]) {
    this.suppliers = suppliers;
  }

  getSuppliers() {
    return this.suppliers.slice();
  }
}