import { NgModule } from '@angular/core';

import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrainingComponent } from './training.component';
import { TrainingCourseComponent } from './training-course/training-course.component';
import { TrainingCourseHeldListComponent } from './training-course-held-list/training-course-held-list.component';
import { TrainingCourseHeldBatchListComponent } from './training-course-held-batch-list/training-course-held-batch-list.component';

@NgModule({
  declarations: [
    TrainingComponent,
    TrainingCourseComponent,
    TrainingCourseHeldListComponent,
    TrainingCourseHeldBatchListComponent
  ],
  imports: [
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }