import { Component, OnInit, OnChanges } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { GalleryModalService } from './gallery-modal.service';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  dynamicId = Math.round(Math.random() * 100);
  media;

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private galleryModalService: GalleryModalService
  ) { }

  ngOnInit(): void {
    this.media = this.galleryModalService.getGalleryModalData();
    console.log(this.media)
  }
}
