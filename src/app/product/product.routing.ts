import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCategoryComponent } from './product-category/product-category.component';
import { MasterProductComponent } from './master-product/master-product.component';

const routes: Routes = [
  { path: '', component: ProductCategoryComponent },
  { path: 'product/master-product/:id', component: MasterProductComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRouting { }