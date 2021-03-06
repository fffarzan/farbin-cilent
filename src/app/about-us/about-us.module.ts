import { NgModule } from '@angular/core';

import { AboutUsRouting } from './about-us.routing';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us.component';
import { RightSideComponent } from './shared/right-side/right-side.component';
import { LeftSideComponent } from './shared/left-side/left-side.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { IncidentListComponent } from './incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './incident/incident-detail/incident-detail.component';
import { NewsletterDetailComponent } from './newsletter/newsletter-detail/newsletter-detail.component';
import { NewsletterListComponent } from './newsletter/newsletter-list/newsletter-list.component';
import { UnsubscribeComponent } from './newsletter/unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    RightSideComponent,
    LeftSideComponent,
    NewsAndEventsComponent,
    IncidentListComponent,
    IncidentDetailComponent,
    NewsletterDetailComponent,
    NewsletterListComponent,
    UnsubscribeComponent
  ],
  imports: [
    AboutUsRouting,
    SharedModule
  ],
  exports: [
    RightSideComponent,
    LeftSideComponent
  ]
})
export class AboutUsModule { }