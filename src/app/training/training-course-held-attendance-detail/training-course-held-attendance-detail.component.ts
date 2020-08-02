import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TrainingDataStorageService } from '../shared/training-data-storage.service';
import { TrainingCourseHeldAttendanceDetailService } from './training-course-held-attendance-detail.service';
import { TrainingCourseHeldAttendanceDetail } from './training-course-held-attendance-detail.model';

@Component({
  selector: 'app-training-course-held-attendance-detail',
  templateUrl: './training-course-held-attendance-detail.component.html',
  styleUrls: ['./training-course-held-attendance-detail.component.css']
})
export class TrainingCourseHeldAttendanceDetailComponent implements OnInit, OnDestroy {
  enviornment: { production: boolean, baseUrl: string } = environment;
  person: TrainingCourseHeldAttendanceDetail;
  imageGalleryData = {
    media: null,
    staticUrl: 'assets/img/docx.png',
    dynamicImagePropertyName: 'Url',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 } }
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
        items: 4
      }
    }
  };
  subsrcription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private trainingDataStorageService: TrainingDataStorageService,
    private trainingCourseHeldAttendanceDetailService: TrainingCourseHeldAttendanceDetailService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getTrainingCourseHeldAttendanceDetailData(param['id']));
  }

  ngOnDestroy() {
    this.subsrcription.unsubscribe();
  }

  getTrainingCourseHeldAttendanceDetailData(id: number) {
    this.subsrcription = this.trainingDataStorageService.fetchTrainingCourseHeldAttendanceDetail({ IDX: id })
      .subscribe(() => {
        this.person = this.trainingCourseHeldAttendanceDetailService.getTrainingCourseHeldAttendanceDetail()[0];
        
        if (this.person.Certifications) {
          // the type ... :////
          this.imageGalleryData.media = this.person.Certifications;
  
          let imageGalleryMediaLength: number = Object.keys(this.imageGalleryData.media).length;
          for (let i = 0; i < imageGalleryMediaLength; i++)
            this.imageGalleryData.media[i].FileType = 'jpeg';
        }
      });
  }
}
