import { Component, OnInit, Input } from '@angular/core';

import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { environment } from 'src/environments/environment';
import { TrainingCourseHeldAttendanceCarouselParam } from './training-course-held-attendance-carousel-param.model';

@Component({
  selector: 'app-training-course-held-attendance-carousel',
  templateUrl: './training-course-held-attendance-carousel.component.html',
  styleUrls: ['./training-course-held-attendance-carousel.component.css']
})
export class TrainingCourseHeldAttendanceCarouselComponent implements OnInit {
  @Input() carouselData: TrainingCourseHeldAttendanceCarouselParam;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  carouselItemWidth: number = 90;

  constructor(private extensionMethodService: ExtensionMethodService) { }

  ngOnInit(): void {
  }
}
