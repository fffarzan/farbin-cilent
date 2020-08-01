import { Injectable } from '@angular/core';

import { TrainingCourseHeldBatchDetail } from './training-course-held-batch-detail.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingCourseHeldBatchDetailService {
  private batchDetail: TrainingCourseHeldBatchDetail;
  
  setTrainingCourseHeldBatchDetail(batchDetail: TrainingCourseHeldBatchDetail) {
    this.batchDetail = batchDetail;
  }

  getTrainingCourseHeldBatchDetail() {
    return this.batchDetail;
  }
}