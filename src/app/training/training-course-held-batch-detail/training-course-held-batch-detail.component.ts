import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TrainingDataStorageService } from '../shared/training-data-storage.service';
import { TrainingCourseHeldBatchDetailService } from './training-course-held-batch-detail.service';
import { TrainingCourseHeldBatchDetail } from './training-course-held-batch-detail.model';

@Component({
  selector: 'app-training-course-held-batch-detail',
  templateUrl: './training-course-held-batch-detail.component.html',
  styleUrls: ['./training-course-held-batch-detail.component.css']
})
export class TrainingCourseHeldBatchDetailComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  batchDetail: TrainingCourseHeldBatchDetail;
  batchDetailSub: Subscription;

  constructor(
    private trainingDataStorageService: TrainingDataStorageService,
    private trainingCourseHeldBatchDetailService: TrainingCourseHeldBatchDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getTrainingCourseHeldBatchDetailData(param['id']))
  }

  ngOnDestroy() {
    this.batchDetailSub.unsubscribe();
  }

  private getTrainingCourseHeldBatchDetailData(objectId: number) {
    this.batchDetailSub = this.trainingDataStorageService.fetchTrainingCourseHeldBatchDetail({ IDX: objectId })
      .subscribe(() =>  this.batchDetail = this.trainingCourseHeldBatchDetailService.getTrainingCourseHeldBatchDetail()[0]);
  }
}
