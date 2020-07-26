import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainingComponent } from './training.component';
import { TrainingCourseComponent } from './training-course/training-course.component';

const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'training-course/:id', component: TrainingCourseComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }