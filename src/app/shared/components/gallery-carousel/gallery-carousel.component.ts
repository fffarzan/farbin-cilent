import { Component, OnInit, Input } from '@angular/core';

import { GalleryCarousel, GalleryMedia } from './gallery-carousel.model';
import { environment } from 'src/environments/environment';
import { ExtensionMethodService } from '../../extension-method.service';
import { GalleryModalService } from 'src/app/layout/gallery-modal/gallery-modal.service';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.css']
})
export class GalleryCarouselComponent implements OnInit {
  @Input() carouselData: GalleryCarousel;
  @Input() itemWidth: number;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  carouselItemWidth: number = 160;
  mediaUrls: string[];

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private galleryModalService: GalleryModalService
  ) { }

  ngOnInit(): void {
    if (this.itemWidth) this.carouselItemWidth = this.itemWidth;
  }

  onOpenGalleryModal(currentItem: any, allItems: any) {
    this.galleryModalService.setGalleryModalData(currentItem, allItems);

    // trigger model when data arrived
    this.galleryModalService.galleryModalOpen();
  }
}
