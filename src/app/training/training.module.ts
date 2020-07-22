import { NgModule } from '@angular/core';

import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrainingComponent } from './training.component';

@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }