import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { IncidentListComponent } from './incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './incident/incident-detail/incident-detail.component';
import { IncidentDetailResolver } from './incident/incident-detail/incident-detail.resolver';
import { NewsletterListComponent } from './newsletter/newsletter-list/newsletter-list.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'news-and-events', component: NewsAndEventsComponent },
  { path: 'news-and-events/incident-list', component: IncidentListComponent },
  { path: 'news-and-events/incident/:id', component: IncidentDetailComponent , resolve: { incident: IncidentDetailResolver } },
  { path: 'news-and-events/newsletter-list', component: NewsletterListComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }