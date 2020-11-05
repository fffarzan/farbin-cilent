import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { GalleryModalService } from './gallery-modal.service';
import { GalleryCarousel, GalleryMedia } from '../../shared/components/gallery-carousel/gallery-carousel.model';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @ViewChild('parent', { static: false }) parentDiv: ElementRef;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId: number = Math.round(Math.random() * 100);
  media: any;
  carouselData: GalleryCarousel = {
    media: null,
    staticUrl: '/images/docx.png',
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
  carouselItemWidth: number = 120;

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private galleryModalService: GalleryModalService
  ) { }

  ngOnInit(): void {
    this.media = this.galleryModalService.getGalleryModalData();
    this.carouselData.media = this.media.items;
    // this.media.items = this.editPicUrlToGetSmallImg(this.media.items)
  }

  onCloseModal() {
    this.close.emit();
  }

  onCloseModalFromParnet(event: Event) {
    if (event.currentTarget === this.parentDiv.nativeElement) {
      this.close.emit();
    }
  }

  onSendDataToMain(item) {
    this.media.item = item;
  }

  private editPicUrlToGetSmallImg(items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].FileType !== 'mp4' && !items[i].Url.includes('\\Small\\') && !items[i].Url.includes('/Small/'))
        items[i].Url = this.extensionMethodService.getSmallImage(items[i].Url);
    }

    return items;
  }
}
