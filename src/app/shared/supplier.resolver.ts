import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { LayoutDataStorageService } from 'src/app/layout/shared/layout-data-storage.service';
import { Supplier } from './supplier.model';
import { SupplierService } from './supplier.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierResolver implements Resolve<Supplier[]> {
  constructor(
    private layoutDataStorageService: LayoutDataStorageService,
    private supplierService: SupplierService
  ) {}

  resolve() {
    const suppliers = this.supplierService.getSuppliers();

    if (suppliers.length === 0)
      return this.layoutDataStorageService.fetchSuppliers();
    else 
      return suppliers;
  }
}