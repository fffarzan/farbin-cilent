import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductRouting } from './product.routing';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { MasterProductComponent } from './master-product/master-product.component';
import { DefineDetailProductComponent } from './define-detail-product/define-detail-product.component';

@NgModule({
  declarations: [
    ProductCategoryComponent, 
    MasterProductComponent, 
    DefineDetailProductComponent
  ],
  imports: [
    ProductRouting,
    SharedModule
  ]
})
export class ProductModule { }