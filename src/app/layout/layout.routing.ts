import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'training', loadChildren: () => import('../training/training.module').then(m => m.TrainingModule) },
  { path: 'article-category', loadChildren: () => import('../article/article.module').then(m => m.ArticleModule) },
  { path: 'product/product-category/:supplierId/:parentCateoryId', loadChildren: () => import('../product/product.module').then(m => m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class LayoutRouting { }
