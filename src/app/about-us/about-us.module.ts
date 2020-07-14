import { NgModule } from '@angular/core';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us.component';
import { RightSideComponent } from './shared/right-side/right-side.component';
import { LeftSideComponent } from './shared/left-side/left-side.component';
import { NewsAndEventsCategoriesComponent } from './news-and-events/news-and-events-categories/news-and-events-categories.component';
import { IncidentListComponent } from './news-and-events/incident/incident-list/incident-list.component';
import { IncidentDetailComponent } from './news-and-events/incident/incident-detail/incident-detail.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    RightSideComponent,
    LeftSideComponent,
    NewsAndEventsCategoriesComponent,
    IncidentListComponent,
    IncidentDetailComponent
  ],
  imports: [
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }