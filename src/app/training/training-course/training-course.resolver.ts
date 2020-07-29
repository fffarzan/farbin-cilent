import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TrainingCourseService } from './training-course.service';
import { TrainingCourse } from './training-course.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingCourseResolver implements Resolve<TrainingCourse> {
  constructor(
    private dataStorageService: DataStorageService,
    private trainingCourseService: TrainingCourseService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    let course: TrainingCourse = this.trainingCourseService.getTrainingCourse();

    if (!course)
      return this.dataStorageService.fetchTrainingCourse({ IDX: +(route.params['id']) });
    else
      return course;
  }
}