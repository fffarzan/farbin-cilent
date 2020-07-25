import { Injectable } from '@angular/core';

import { TrainingCourse } from './training-course.model';
import { TrainingCoursesHeldReviewForCourse } from './training-courses-held-review for-course.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingCourseService {
  private trainingCourse: TrainingCourse;
  private trainingCoursesHeld: TrainingCoursesHeldReviewForCourse;

  setTrainingCourse(trainingCourse: TrainingCourse) {
    this.trainingCourse = trainingCourse;
  }

  getTrainingCourse() {
    return this.trainingCourse;
  }

  setTrainingCoursesHeld(trainingCouresesHeld: TrainingCoursesHeldReviewForCourse) {
    this.trainingCoursesHeld = trainingCouresesHeld;
  }

  getTrainingCoursesHeld() {
    return this.trainingCoursesHeld;
  }
}