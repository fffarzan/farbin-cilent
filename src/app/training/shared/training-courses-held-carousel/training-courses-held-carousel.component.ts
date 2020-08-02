import { Component, OnInit, Input } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ExtensionMethodService } from '../../../shared/extension-method.service';
import { TrainingCoursesHeldCarouselParams } from './training-courses-held-carousel-params.model';

@Component({
  selector: 'app-training-courses-held-carousel',
  templateUrl: './training-courses-held-carousel.component.html',
  styleUrls: ['./training-courses-held-carousel.component.css']
})
export class TrainingCoursesHeldCarouselComponent implements OnInit {
  @Input() carouselData: TrainingCoursesHeldCarouselParams;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  carouselItemWidth: number = 250;

  constructor(
    private extensionMethodService: ExtensionMethodService
  ) { }

  ngOnInit(): void {
  }
}
