import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { NewsAndEventsCategoriesComponent } from './news-and-events/news-and-events-categories/news-and-events-categories.component';
import { IncidentListComponent } from './news-and-events/incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './news-and-events/incident/incident-detail/incident-detail.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'news-and-events', component: NewsAndEventsCategoriesComponent },
  { path: 'news-and-events/incidents', component: IncidentListComponent },
  { path: 'news-and-events/incidents:id', component: IncidentDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }