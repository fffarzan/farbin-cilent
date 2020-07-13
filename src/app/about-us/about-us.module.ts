import { NgModule } from '@angular/core';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutUsCategoriesComponent } from './about-us-categories/about-us-categories.component';
import { RightSideComponent } from './shared/right-side/right-side.component';
import { LeftSideComponent } from './shared/left-side/left-side.component';
import { NewsAndEventsCategoriesComponent } from './news-and-events/news-and-events-categories/news-and-events-categories.component';
import { NewsletterArchiveComponent } from './news-and-events/newsletter/newsletter-archive/newsletter-archive.component';
import { NewsletterDetailComponent } from './news-and-events/newsletter/newsletter-detail/newsletter-detail.component';
import { IncidentListComponent } from './news-and-events/incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './news-and-events/incident/incident-detail/incident-detail.component';

@NgModule({
  declarations: [
    AboutUsCategoriesComponent,
    RightSideComponent,
    LeftSideComponent,
    NewsAndEventsCategoriesComponent,
    NewsletterArchiveComponent,
    NewsletterDetailComponent,
    IncidentListComponent,
    IncidentDetailComponent
  ],
  imports: [
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }