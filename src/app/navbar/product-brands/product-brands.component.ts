import { Component, OnInit } from '@angular/core';

import { SupplierService } from '../../shared/supplier.service';
import { Supplier } from 'src/app/shared/supplier.model';

@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit {
  suppliers: Supplier[] = [];

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }
}
