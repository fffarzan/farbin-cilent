import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { IncidentListComponent } from './incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './incident/incident-detail/incident-detail.component';
import { NewsletterListComponent } from './newsletter/newsletter-list/newsletter-list.component';
import { NewsletterDetailComponent } from './newsletter/newsletter-detail/newsletter-detail.component';
import { UnsubscribeComponent } from './newsletter/unsubscribe/unsubscribe.component';

const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'news-and-events', component: NewsAndEventsComponent },
  { path: 'news-and-events/incident-list', component: IncidentListComponent },
  { path: 'news-and-events/incident/:id', component: IncidentDetailComponent },
  { path: 'news-and-events/newsletter-list', component: NewsletterListComponent },
  { path: 'news-and-events/newsletter/:id', component: NewsletterDetailComponent },
  { path: 'news-and-events/unsubscribe/:email', component: UnsubscribeComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRouting { }