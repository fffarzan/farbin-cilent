import { Injectable } from '@angular/core';
import { TrainingCourseHeldReview } from './training-course-held-review.model';
import { TrainingCoursesReview } from './training-course-review.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private coursesHeld: TrainingCourseHeldReview[];
  private courses: TrainingCoursesReview[];

  setTrainingCoursesHeldReview(cousersHeld: TrainingCourseHeldReview[]) {
    this.coursesHeld = cousersHeld;
  }

  getTrainingCoursesHeldReview() {
    return this.coursesHeld.slice();
  }

  setTrainingCoursesReview(courses: TrainingCoursesReview[]) {
    this.courses = courses;
  }

  getTrainingCoursesReview() {
    return this.courses.slice();
  }
}