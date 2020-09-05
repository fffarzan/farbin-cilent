import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCategoryComponent } from './product-category/product-category.component';
import { MasterProductComponent } from './master-product/master-product.component';
import { DefineDetailProductComponent } from './define-detail-product/define-detail-product.component';

const routes: Routes = [
  { path: '', component: ProductCategoryComponent },
  { path: 'product/master-product/:id', component: MasterProductComponent },
  { path: 'product/define-detail-product/:id', component: DefineDetailProductComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRouting { }