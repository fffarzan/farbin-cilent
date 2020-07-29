import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainingComponent } from './training.component';
import { TrainingCourseComponent } from './training-course/training-course.component';
import { TrainingCourseResolver } from './training-course/training-course.resolver';
import { TrainingCourseHeldListComponent } from './training-course-held-list/training-course-held-list.component';

const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'training-course/:id', component: TrainingCourseComponent, resolve: { course: TrainingCourseResolver } },
  { path: 'training/:moreCoursesUrl/:id', component: TrainingCourseHeldListComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }