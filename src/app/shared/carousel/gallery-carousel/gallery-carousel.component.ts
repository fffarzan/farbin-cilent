import { Component, OnInit, Input } from '@angular/core';

import { GalleryCarousel } from './gallery-carousel.model';
import { environment } from 'src/environments/environment';
import { ExtensionMethodService } from '../../extension-method.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.css']
})
export class GalleryCarouselComponent implements OnInit {
  @Input() carouselData: GalleryCarousel;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId = Math.round(Math.random() * 100);
  carouselItemWidth: number = 160;

  constructor(private extensionMethodService: ExtensionMethodService) { }

  ngOnInit(): void {
  }
}
