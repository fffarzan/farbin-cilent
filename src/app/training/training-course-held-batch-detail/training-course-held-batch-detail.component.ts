import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TrainingCourseHeldBatchDetailService } from './training-course-held-batch-detail.service';
import { ActivatedRoute } from '@angular/router';
import { TrainingCourseHeldBatchDetail } from './training-course-held-batch-detail.model';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training-course-held-batch-detail',
  templateUrl: './training-course-held-batch-detail.component.html',
  styleUrls: ['./training-course-held-batch-detail.component.css']
})
export class TrainingCourseHeldBatchDetailComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  batchDetail: TrainingCourseHeldBatchDetail;
  bachDetailSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private trainingCourseHeldBatchDetailService: TrainingCourseHeldBatchDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getTrainingCourseHeldBatchDetailData(param['id']))
  }

  ngOnDestroy() {
    this.bachDetailSub.unsubscribe();
  }

  private getTrainingCourseHeldBatchDetailData(objectId: number) {
    this.bachDetailSub = this.dataStorageService.fetchTrainingCourseHeldBatchDetail({ IDX: objectId })
      .subscribe(() =>  this.batchDetail = this.trainingCourseHeldBatchDetailService.getTrainingCourseHeldBatchDetail()[0]);
  }
}
