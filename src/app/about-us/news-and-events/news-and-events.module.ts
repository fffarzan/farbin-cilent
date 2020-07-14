import { NgModule } from '@angular/core';

import { AboutUsModule } from '../about-us.module';
import { NewsAndEventsRoutingModule } from './news-and-events-routing.module';
import { NewsAndEventsComponent } from './news-and-events.component';
import { IncidentListComponent } from './incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './incident/incident-detail/incident-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NewsAndEventsComponent,
    IncidentListComponent,
    IncidentDetailComponent
  ],
  imports: [
    AboutUsModule,
    NewsAndEventsRoutingModule,
    SharedModule
  ],
  exports: [
    // NewsAndEventsComponent
  ]
})
export class NewsAndEventsModule {}