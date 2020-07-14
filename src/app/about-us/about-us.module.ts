import { NgModule } from '@angular/core';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { RightSideComponent } from './shared/right-side/right-side.component';
import { LeftSideComponent } from './shared/left-side/left-side.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    RightSideComponent,
    LeftSideComponent
  ],
  imports: [
    AboutUsRoutingModule,
  ],
  exports: [
    RightSideComponent,
    LeftSideComponent
  ]
})
export class AboutUsModule { }