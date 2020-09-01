import { Component, OnInit } from '@angular/core';

import { ProductDataStorageService } from '../shared/product-data-storage.service';
import { MasterProductService } from './master-product.service';
import { SupplierLogoService } from '../shared/supplier-logo/supplier.logo.service';
import { CategoryMenuService } from '../shared/category-menu/category-menu.service';
import { BreadcrumbService } from '../shared/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-master-product',
  templateUrl: './master-product.component.html',
  styleUrls: ['./master-product.component.css']
})
export class MasterProductComponent implements OnInit {

  constructor(
    private dataStorageService: ProductDataStorageService,
    private masterProductService: MasterProductService,
    private supplierLogoService: SupplierLogoService,
    private categoryMenuService: CategoryMenuService,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    // this.dataStorageService.fetchDefineDetailProducts().subscribe()
  }

  // private sendDataToComponents(data: any) {
  //   this.supplierLogoService.setSupplierLogo(data.supplierLogoData);
  //   this.categoryMenuService.setCategoryMenu(data.childCategoryData);
  //   this.breadcrumbService.setBreadcrumb(data.breadcrumbData);
  // }
}
