import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { IncidentListComponent } from './incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './incident/incident-detail/incident-detail.component';
import { IncidentDetailResolver } from './incident/incident-detail/incident-detail.resolver';
import { NewsletterListComponent } from './newsletter/newsletter-list/newsletter-list.component';
import { NewsletterDetailComponent } from './newsletter/newsletter-detail/newsletter-detail.component';
import { NewsletterDetailResolver } from './newsletter/newsletter-detail/newsletter-detail.resolver';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'news-and-events', component: NewsAndEventsComponent },
  { path: 'news-and-events/incident-list', component: IncidentListComponent },
  { path: 'news-and-events/incident/:id', component: IncidentDetailComponent , resolve: { incident: IncidentDetailResolver } },
  { path: 'news-and-events/newsletter-list', component: NewsletterListComponent },
  { path: 'news-and-events/newsletter/:id', component: NewsletterDetailComponent, resolve: { newsletter: NewsletterDetailResolver } }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }