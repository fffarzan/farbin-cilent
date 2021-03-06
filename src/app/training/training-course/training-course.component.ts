import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TrainingDataStorageService } from '../shared/training-data-storage.service';
import { TrainingCourseService } from './training-course.service';
import { ActivatedRoute } from '@angular/router';
import { TrainingCourse } from './training-course.model';
import { TrainingCourseHeldCarouselReview } from '../shared/training-course-held-carousel-review.model';
import { TrainingCoursesHeldCarouselParams } from 'src/app/training/shared/training-courses-held-carousel/training-courses-held-carousel-params.model';

@Component({
  selector: 'app-training-course',
  templateUrl: './training-course.component.html',
  styleUrls: [
    './training-course.component.css',
    './training-course-old.component.css',
    '../../shared/styles/qr-code.css'
  ]
})
export class TrainingCourseComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  courseId: number;
  course: TrainingCourse;
  coursesHeld: TrainingCourseHeldCarouselReview;
  trainingCoursesHeldCarouselParams: TrainingCoursesHeldCarouselParams = {
    imageStaticUrl: '',
    dynamicFieldImage: 'PicUrl',
    pageUrlDirection: 'TrainingCoursesHeld',
    moreCoursesUrl: 'TrainingAllCourses',
    moreCoursesUrlIdx: null,
    dynamicFieldName1: 'Name_Fa',
    dynamicFieldName2: 'ChildCategoryName_Fa',
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
    private trainingDataStorageService: TrainingDataStorageService,
    private trainingCourseService: TrainingCourseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(param => {
      this.courseId = +param['id'];
      this.getTrainingCourseData({ IDX: +(param['id']) })
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getTrainingCourseData(idObject: object) {
    this.trainingDataStorageService.fetchTrainingCourse(idObject).subscribe(() => {
      this.course = this.trainingCourseService.getTrainingCourse()[0];
      this.getTrainingCoursesHeldData(this.course.Name_Fa);
    });
  }

  private getTrainingCoursesHeldData(courseName: string) {
    this.trainingDataStorageService.fetchTrainingCoursesHeldFromCourse({ UniqueName: courseName }).subscribe(() => {
      this.coursesHeld = this.trainingCourseService.getTrainingCoursesHeld();

      // split string and create an object
      let coursesHeldLength = Object.keys(this.coursesHeld).length;
      for (let i = 0; i < coursesHeldLength; i++)
        if (this.coursesHeld[i].Items) this.coursesHeld[i].Items = JSON.parse(this.coursesHeld[i].Items);

      // send data to training-courses-held-carousel component
      this.trainingCoursesHeldCarouselParams.data = this.coursesHeld[0];
      this.trainingCoursesHeldCarouselParams.moreCoursesUrlIdx = this.courseId;
    });

  }
}
