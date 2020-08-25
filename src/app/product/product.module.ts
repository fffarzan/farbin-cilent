import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductRouting } from './product.routing';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { MasterProductComponent } from './master-product/master-product.component';
import { DefineDetailProductComponent } from './define-detail-product/define-detail-product.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { ProductCategoryCarouselComponent } from './product-category/product-category-carousel/product-category-carousel.component';
import { FixedMenuComponent } from './product-category/fixed-menu/fixed-menu.component';
import { SupplierLogoComponent } from './shared/supplier-logo/supplier-logo.component';
import { CategoryMenuComponent } from './shared/category-menu/category-menu.component';

@NgModule({
  declarations: [
    ProductCategoryComponent,
    MasterProductComponent,
    DefineDetailProductComponent,
    BreadcrumbComponent,
    ProductCategoryCarouselComponent,
    FixedMenuComponent,
    SupplierLogoComponent,
    CategoryMenuComponent
  ],
  imports: [
    ProductRouting,
    SharedModule
  ]
})
export class ProductModule { }