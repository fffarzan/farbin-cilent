import { NgModule } from '@angular/core';

import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrainingComponent } from './training.component';
import { TrainingCourseComponent } from './training-course/training-course.component';
import { TrainingCourseHeldListComponent } from './training-course-held-list/training-course-held-list.component';
import { TrainingCourseHeldBatchListComponent } from './training-course-held-batch-list/training-course-held-batch-list.component';
import { TrainingCourseHeldBatchDetailComponent } from './training-course-held-batch-detail/training-course-held-batch-detail.component';
import { TrainingCourseHeldDetailComponent } from './training-course-held-detail/training-course-held-detail.component';
import { TrainingCourseHeldAttendanceCarouselComponent } from './shared/training-course-held-attendance-carousel/training-course-held-attendance-carousel.component';
import { TrainingCourseHeldAttendanceDetailComponent } from './training-course-held-attendance-detail/training-course-held-attendance-detail.component';
import { TrainingCoursesHeldCarouselComponent } from './shared/training-courses-held-carousel/training-courses-held-carousel.component';

@NgModule({
  declarations: [
    TrainingComponent,
    TrainingCourseComponent,
    TrainingCourseHeldListComponent,
    TrainingCourseHeldBatchListComponent,
    TrainingCourseHeldBatchDetailComponent,
    TrainingCourseHeldDetailComponent,
    TrainingCourseHeldAttendanceCarouselComponent,
    TrainingCourseHeldAttendanceDetailComponent,
    TrainingCoursesHeldCarouselComponent
  ],
  imports: [
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }