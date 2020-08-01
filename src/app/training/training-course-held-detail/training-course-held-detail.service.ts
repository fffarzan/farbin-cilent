import { Injectable } from '@angular/core';

import { TrainingCourseHeldDetail } from './training-course-held-detail.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingCourseHeldDetailService {
  private course: TrainingCourseHeldDetail;
  
  setTrainingCourseHeldDetail(course: TrainingCourseHeldDetail) {
    this.course = course;
  }

  getTrainingCourseHeldDetail() {
    return this.course;
  }
}