import { Component, OnInit, OnDestroy } from '@angular/core';

import { TrainingCourseHeldCarouselReview } from '../shared/training-course-held-carousel-review.model'
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TrainingCourseHeldBatchListService } from './training-course-held-batch-list.service';
import { TrainingCoursesHeldCarouselParams } from 'src/app/shared/carousel/training-courses-held-carousel/training-courses-held-carousel-params.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training-course-held-batch-list',
  templateUrl: './training-course-held-batch-list.component.html',
  styleUrls: ['./training-course-held-batch-list.component.css']
})
export class TrainingCourseHeldBatchListComponent implements OnInit, OnDestroy {
  coursesHeldBatchList: TrainingCourseHeldCarouselReview[];
  trainingCoursesHeldCarouselParams: TrainingCoursesHeldCarouselParams = {
    imageStaticUrl: 'assets/img/docx.png',
    dynamicFieldImage: 'PicUrl',
    pageUrlDirection: 'TrainingCoursesHeld',
    moreCoursesUrl: 'TrainingCoursesCompanyDetail',
    moreCoursesUrlIdx: null,
    dynamicFieldName1: 'Name_Fa',
    dynamicFieldName2: 'ChildCategoryTraningCourseName',
    desktopOptions: {
      items: 3,
      stagePadding: 20,
      responsive: { 1024: { items: 4 } },
      dots: false,
      nav: false,
      autoWidth: true
    },
    mobileOptions: {
      mobileItems: {
        maxSize: 500,
        items: 1.7
      },
      tabletItems: {
        maxSize: 768,
        items: 0
      },
      desktopItems: {
        maxSize: 1024,
        items: 3
      }
    },
    data: null
  };
  subscription: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private trainingCourseHeldBatchList: TrainingCourseHeldBatchListService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataStorageService.fetchTrainingCourseHeldBatchList({ UniqueName: 'TrainingCoursesCompanyCategory' })
      .subscribe(() => {
        this.coursesHeldBatchList = this.trainingCourseHeldBatchList.getTrainingCourseHeldBatchListService();

        // split string and create an object
        let coursesHeldBatchListLength = Object.keys(this.coursesHeldBatchList).length;
        for (let i = 0; i < coursesHeldBatchListLength; i++)
          if (this.coursesHeldBatchList[i].Items) this.coursesHeldBatchList[i].Items = JSON.parse(this.coursesHeldBatchList[i].Items);

        // send data to training-courses-held-carousel component
        this.trainingCoursesHeldCarouselParams.data = this.coursesHeldBatchList[0];
        this.trainingCoursesHeldCarouselParams.moreCoursesUrlIdx = this.coursesHeldBatchList[0].IDX;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
