import { NgModule } from '@angular/core';

import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrainingComponent } from './training.component';
import { TrainingCourseComponent } from './training-course/training-course.component';

@NgModule({
  declarations: [
    TrainingComponent,
    TrainingCourseComponent
  ],
  imports: [
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }