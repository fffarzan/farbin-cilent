import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TrainingDataStorageService } from './shared/training-data-storage.service';
import { TrainingService } from './training.service';
import { TrainingCoursesReview } from './training-course-review.model';
import { TrainingCourseHeldReview } from './training-course-held-review.model';
import { StaticModalService } from '../layout/static-modal/static-modal.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  trainingCourses: TrainingCoursesReview[];
  trianingCoursesHeld: TrainingCourseHeldReview[];
  enviornment: { production: boolean, baseUrl: string } = environment;
  customStaticSlideOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 120000,
    nav: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  };
  trainingCoursesSub: Subscription;
  trianingCoursesHeldSub: Subscription;

  constructor(
    private trainingService: TrainingService,
    private trainingDataStorageService: TrainingDataStorageService,
    private staticModalService: StaticModalService
  ) { }

  ngOnInit(): void {
    this.trainingCoursesSub = this.trainingDataStorageService.fetchTrainigCoursesReview()
      .subscribe(() => this.trainingCourses = this.trainingService.getTrainingCoursesReview());
    this.trianingCoursesHeldSub = this.trainingDataStorageService.fetchTrainingCourseHeldReview()
      .subscribe(() => this.trianingCoursesHeld = this.trainingService.getTrainingCoursesHeldReview());
  }

  onOpenStaticModal(item: number) {
    this.staticModalService.setStaticModalData(item);

    // trigger model when data arrived
    this.staticModalService.staticModalOpen();
  }

  ngOnDestroy() {
    this.trainingCoursesSub.unsubscribe();
    this.trianingCoursesHeldSub.unsubscribe();
  }
}
