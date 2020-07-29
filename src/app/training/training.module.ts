import { NgModule } from '@angular/core';

import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrainingComponent } from './training.component';
import { TrainingCourseComponent } from './training-course/training-course.component';
import { TrainingCourseHeldListComponent } from './training-course-held-list/training-course-held-list.component';

@NgModule({
  declarations: [
    TrainingComponent,
    TrainingCourseComponent,
    TrainingCourseHeldListComponent
  ],
  imports: [
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }