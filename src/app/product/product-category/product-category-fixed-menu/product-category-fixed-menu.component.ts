import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { SupplierLogoService } from '../../shared/supplier-logo/supplier.logo.service';
import { CategoryMenuService } from '../../shared/category-menu/category-menu.service';
import { BreadcrumbService } from '../../shared/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-product-category-fixed-menu',
  templateUrl: './product-category-fixed-menu.component.html',
  styleUrls: ['./product-category-fixed-menu.component.css']
})
export class ProductCategoryFixedMenuComponent implements DoCheck {
  @Input() menuData = {
    supplierLogoData: null,
    childCategoryData: null,
    breadcrumbData: null
  };
  isScrollReachedTop: boolean = true;

  constructor(
    private supplierLogoService: SupplierLogoService,
    private categoryMenuService: CategoryMenuService,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngDoCheck() {
    this.sendDataToComponents(this.menuData)
  }

  onScrollTriggered() {
    this.isScrollReachedTop = false;
  }

  onScrollReachedTop() {
    this.isScrollReachedTop = true;
  }

  private sendDataToComponents(data: any) {
    const supplierLogoData = data.supplierLogoData;
    const childCategoryData = data.childCategoryData;
    const breadcrumbData = data.breadcrumbData;
    if (data) {
      this.supplierLogoService.setSupplierLogo(supplierLogoData);
      this.categoryMenuService.setCategoryMenu(childCategoryData);
      this.breadcrumbService.setBreadcrumb(breadcrumbData);
    }
  }
}
