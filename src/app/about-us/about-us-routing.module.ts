import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsCategoriesComponent } from './about-us-categories/about-us-categories.component';
import { NewsAndEventsCategoriesComponent } from './news-and-events/news-and-events-categories/news-and-events-categories.component';
import { IncidentListComponent } from './news-and-events/incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './news-and-events/incident/incident-detail/incident-detail.component';
import { NewsletterArchiveComponent } from './news-and-events/newsletter/newsletter-archive/newsletter-archive.component';
import { NewsletterDetailComponent } from './news-and-events/newsletter/newsletter-detail/newsletter-detail.component';

const routes: Routes = [
  { path: '', component: AboutUsCategoriesComponent },
  { path: 'news-and-events', component: NewsAndEventsCategoriesComponent },
  { path: 'news-and-events/incidents', component: IncidentListComponent },
  { path: 'news-and-events/incidents:id', component: IncidentDetailComponent },
  { path: 'news-and-events/news-letters', component: NewsletterArchiveComponent },
  { path: 'news-and-events/news-letters:id', component: NewsletterDetailComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }