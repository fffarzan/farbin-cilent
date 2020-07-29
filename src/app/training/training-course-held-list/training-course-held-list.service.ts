import { Injectable } from '@angular/core';

import { TrainingCourseHeldList } from './training-course-held-list.model';

@Injectable({
  'providedIn': 'root'
})
export class TrainingCourseHeldListService {
  private coursesHeldList: TrainingCourseHeldList[];

  setTrainingCourseHeldList(coursesHeldList: TrainingCourseHeldList[]) {
    this.coursesHeldList = coursesHeldList;
  }

  getTrainingCourseHeldList() {
    return this.coursesHeldList;
  }
}