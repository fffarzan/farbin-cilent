import { Injectable } from '@angular/core';

import { TrainingCourse } from './training-course.model';
import { TrainingCourseHeldCarouselReview } from '../shared/training-course-held-carousel-review.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingCourseService {
  private trainingCourse: TrainingCourse;
  private trainingCoursesHeld: TrainingCourseHeldCarouselReview;

  setTrainingCourse(trainingCourse: TrainingCourse) {
    this.trainingCourse = trainingCourse;
  }

  getTrainingCourse() {
    return this.trainingCourse;
  }

  setTrainingCoursesHeld(trainingCouresesHeld: TrainingCourseHeldCarouselReview) {
    this.trainingCoursesHeld = trainingCouresesHeld;
  }

  getTrainingCoursesHeld() {
    return this.trainingCoursesHeld;
  }
}