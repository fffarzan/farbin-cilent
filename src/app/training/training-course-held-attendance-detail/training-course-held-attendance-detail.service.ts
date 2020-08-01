import { Injectable } from '@angular/core';

import { TrainingCourseHeldAttendanceDetail } from './training-course-held-attendance-detail.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingCourseHeldAttendanceDetailService {
  private person: TrainingCourseHeldAttendanceDetail;

  setTrainingCourseHeldAttendanceDetail(person: TrainingCourseHeldAttendanceDetail) {
    this.person = person;
  }

  getTrainingCourseHeldAttendanceDetail() {
    return this.person;
  }
}