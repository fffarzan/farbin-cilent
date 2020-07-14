import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsAndEventsComponent } from './news-and-events.component';
import { IncidentListComponent } from './incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './incident/incident-detail/incident-detail.component';

const routes: Routes = [
  { path: '', component: NewsAndEventsComponent },
  { path: 'incident-list', component: IncidentListComponent },
  { path: 'incident/:id', component: IncidentDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsAndEventsRoutingModule { }