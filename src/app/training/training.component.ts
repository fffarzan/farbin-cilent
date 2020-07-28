import { Component, OnInit } from '@angular/core';

import { TrainingService } from './training.service';
import { DataStorageService } from '../shared/data-storage.service';
import { TrainingCoursesReview } from './training-course-review.model';
import { TrainingCourseHeldReview } from './training-course-held-review.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
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

  constructor(
    private trainingService: TrainingService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchTrainigCoursesReview().subscribe(() => this.trainingCourses = this.trainingService.getTrainingCoursesReview());
    this.dataStorageService.fetchTrainingCourseHeldReview().subscribe(() => this.trianingCoursesHeld = this.trainingService.getTrainingCoursesHeldReview());
  }
}
