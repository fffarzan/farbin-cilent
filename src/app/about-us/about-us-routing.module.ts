import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'news-and-events', loadChildren: () => import('./news-and-events/news-and-events.module').then(m => m.NewsAndEventsModule) }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }