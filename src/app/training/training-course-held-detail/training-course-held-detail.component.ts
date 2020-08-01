import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TrainingCourseHeldDetailService } from './training-course-held-detail.service';
import { environment } from 'src/environments/environment';
import { TrainingCourseHeldDetail } from './training-course-held-detail.model';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { GalleryCarousel } from 'src/app/shared/carousel/gallery-carousel/gallery-carousel.model';
import { TrainingCourseHeldAttendanceCarouselParam } from '../shared/training-course-held-attendance-carousel/training-course-held-attendance-carousel-param.model';

@Component({
  selector: 'app-training-course-held-detail',
  templateUrl: './training-course-held-detail.component.html',
  styleUrls: ['./training-course-held-detail.component.css']
})
export class TrainingCourseHeldDetailComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  course: TrainingCourseHeldDetail;
  courseImageData: GalleryCarousel = {
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
        items: 5
      }
    }
  };
  courseConfirmationsData: GalleryCarousel = {
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
        items: 5
      }
    }
  };
  courseAttendanceData: TrainingCourseHeldAttendanceCarouselParam = {
    data: null,
    imageStaticUrl: 'assets/img/human.png',
    dynamicFieldImage: 'PicUrl',
    pageUrlDirection: 'TrainingParticipantCV',
    dynamicFieldName: 'Name_Fa',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 9 } }
    },
    mobileOptions: {
      mobileItems: {
        maxSize: 500,
        items: 4
      },
      tabletItems: {
        maxSize: 768,
        items: 0
      },
      desktopItems: {
        maxSize: 1024,
        items: 9
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private extensionMethodService: ExtensionMethodService,
    private dataStorageService: DataStorageService,
    private trainingCourseHeldDetailService: TrainingCourseHeldDetailService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getTrainingCourseHeldDetailData(param['id']))
  }

  private getTrainingCourseHeldDetailData(id: number) {
    this.dataStorageService.fetchTrainingCourseHeldDetail({ IDX: id })
      .subscribe(() => {
        this.course = this.trainingCourseHeldDetailService.getTrainingCourseHeldDetail()[0];
        this.course.EndDate = this.changeDateFormat(this.course.EndDate);

        this.courseImageData.media = this.course.ImageGallery;
        this.courseConfirmationsData.media = this.course.Confirmation;
        this.courseAttendanceData.data = this.course.TrainingCouseUser;
      })
  }

  private changeDateFormat(date: string) {
    if (date) return <string>this.extensionMethodService.ginj(date.split('T')[0].replace('-', '/').replace('-', '/'), true);
  }
}
