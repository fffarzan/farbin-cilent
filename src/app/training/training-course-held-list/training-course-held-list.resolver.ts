import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TrainingCourseHeldList } from './training-course-held-list.model';
import { TrainingCourseHeldListService } from './training-course-held-list.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingCourseHeldListResolver implements Resolve<TrainingCourseHeldList[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private trainingCourseHeldListService: TrainingCourseHeldListService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    let courses: TrainingCourseHeldList[] = this.trainingCourseHeldListService.getTrainingCourseHeldList();

    if (!courses)
      return this.dataStorageService.fetchTrainingCourseHeldList({ IDX: +(route.params['id']) });
    else
      return courses;
  }
}