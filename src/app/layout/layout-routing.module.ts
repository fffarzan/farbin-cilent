import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SupplierResolver } from '../shared/supplier.resolver';

const routes: Routes = [
  {
    path: '', resolve: [SupplierResolver], children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about-us', loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsModule) },
      { path: 'training', loadChildren: () => import('../training/training.module').then(m => m.TrainingModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
