import { Component, OnInit, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

import { SupplierLogoService } from '../../shared/supplier-logo/supplier.logo.service';
import { CategoryMenuService } from '../../shared/category-menu/category-menu.service';
import { BreadcrumbService } from '../../shared/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-fixed-menu',
  templateUrl: './fixed-menu.component.html',
  styleUrls: ['./fixed-menu.component.css']
})
export class FixedMenuComponent implements OnInit, DoCheck {
  @Input() menuData;

  constructor(
    private supplierLogoService: SupplierLogoService,
    private categoryMenuService: CategoryMenuService,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this.sendDataToComponents(this.menuData);
  }

  ngDoCheck() {
    this.sendDataToComponents(this.menuData)
  }

  private sendDataToComponents(data: any) {
    this.supplierLogoService.setSupplierLogo(data.supplierLogoData);
    this.categoryMenuService.setCategoryMenu(data.childCategoryData);
    this.breadcrumbService.setBreadcrumb(data.breadcrumbData);
  }
}
