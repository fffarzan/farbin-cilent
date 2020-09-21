import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductRouting } from './product.routing';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { MasterProductComponent } from './master-product/master-product.component';
import { DefineDetailProductComponent } from './define-detail-product/define-detail-product.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { ProductCategoryCarouselComponent } from './product-category/product-category-carousel/product-category-carousel.component';
import { ProductCategoryFixedMenuComponent } from './product-category/product-category-fixed-menu/product-category-fixed-menu.component';
import { SupplierLogoComponent } from './shared/supplier-logo/supplier-logo.component';
import { CategoryMenuComponent } from './shared/category-menu/category-menu.component';
import { CompareListComponent } from './compare/compare-list/compare-list.component';
import { CompareDetailComponent } from './compare/compare-detail/compare-detail.component';
import { CompareItemComponent } from './compare/compare-list/compare-item/compare-item.component';
import { CompareTitleComponent } from './compare/compare-list/compare-title/compare-title.component';
import { RecentlyViewedProductCarouselComponent } from './compare/compare-list/recently-viewed-product-carousel/recently-viewed-product-carousel.component';

@NgModule({
  declarations: [
    ProductCategoryComponent,
    MasterProductComponent,
    DefineDetailProductComponent,
    BreadcrumbComponent,
    ProductCategoryCarouselComponent,
    ProductCategoryFixedMenuComponent,
    SupplierLogoComponent,
    CategoryMenuComponent,
    CompareListComponent,
    CompareDetailComponent,
    CompareItemComponent,
    CompareTitleComponent,
    RecentlyViewedProductCarouselComponent
  ],
  imports: [
    ProductRouting,
    SharedModule
  ],
  exports: [
    ProductCategoryFixedMenuComponent
  ]
})
export class ProductModule { }