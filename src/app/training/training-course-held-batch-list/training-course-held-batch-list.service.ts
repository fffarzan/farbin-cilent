import { Injectable } from '@angular/core';

import { TrainingCourseHeldCarouselReview } from '../shared/training-course-held-carousel-review.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingCourseHeldBatchListService {
  private coursesHeldBatchList: TrainingCourseHeldCarouselReview[];

  setTrainingCourseHeldBatchListService(coursesHeldBatchList: TrainingCourseHeldCarouselReview[]) {
    this.coursesHeldBatchList = coursesHeldBatchList;
  }

  getTrainingCourseHeldBatchListService() {
    return this.coursesHeldBatchList;
  }
}