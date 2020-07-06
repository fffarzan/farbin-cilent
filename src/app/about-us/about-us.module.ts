import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsCategoriesComponent } from './about-us-categories/about-us-categories.component';
import { RightSideComponent } from './shared/right-side/right-side.component';
import { LeftSideComponent } from './shared/left-side/left-side.component';
import { NewsAndEventsCategoriesComponent } from './news-and-events/news-and-events-categories/news-and-events-categories.component';
import { NewsletterArchiveComponent } from './news-and-events/newsletter/newsletter-archive/newsletter-archive.component';
import { NewsletterDetailComponent } from './news-and-events/newsletter/newsletter-detail/newsletter-detail.component';
import { IncidentArchiveComponent } from './news-and-events/incident/incident-archive/incident-archive.component';
import { IncidentDetailComponent } from './news-and-events/incident/incident-detail/incident-detail.component';

@NgModule({
  declarations: [
    AboutUsCategoriesComponent,
    RightSideComponent,
    LeftSideComponent,
    NewsAndEventsCategoriesComponent,
    NewsletterArchiveComponent,
    NewsletterDetailComponent,
    IncidentArchiveComponent,
    IncidentDetailComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }