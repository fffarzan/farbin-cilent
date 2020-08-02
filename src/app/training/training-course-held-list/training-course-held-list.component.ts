import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TrainingDataStorageService } from '../shared/training-data-storage.service';
import { TrainingCourseHeldListService } from './training-course-held-list.service';
import { TrainingCourseHeldList } from './training-course-held-list.model';

@Component({
  selector: 'app-training-course-held-list',
  templateUrl: './training-course-held-list.component.html',
  styleUrls: ['./training-course-held-list.component.css']
})
export class TrainingCourseHeldListComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  coursesHeldList: TrainingCourseHeldList[];
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private TrainingDataStorageService: TrainingDataStorageService,
    private trainingCourseHeldListService: TrainingCourseHeldListService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getTrainingCourseHeldListData(param['id']));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getTrainingCourseHeldListData(objectId: number) {
    this.subscription = this.TrainingDataStorageService.fetchTrainingCourseHeldList({ IDX: objectId })
      .subscribe(() => this.coursesHeldList = this.trainingCourseHeldListService.getTrainingCourseHeldList());
  }
}
