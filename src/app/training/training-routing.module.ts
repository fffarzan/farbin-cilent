import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainingComponent } from './training.component';
import { TrainingCourseComponent } from './training-course/training-course.component';
import { TrainingCourseHeldBatchListComponent } from './training-course-held-batch-list/training-course-held-batch-list.component';
import { TrainingCourseHeldListComponent } from './training-course-held-list/training-course-held-list.component';
import { TrainingCourseHeldBatchDetailComponent } from './training-course-held-batch-detail/training-course-held-batch-detail.component';

const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'training-course/:id', component: TrainingCourseComponent },
  { path: 'training-course-held-batch/:id', component: TrainingCourseHeldBatchDetailComponent },
  { path: 'training-course-held-batch-list', component: TrainingCourseHeldBatchListComponent },
  { path: ':moreCoursesUrl/:id', component: TrainingCourseHeldListComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }