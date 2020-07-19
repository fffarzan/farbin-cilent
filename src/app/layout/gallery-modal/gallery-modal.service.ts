import { Injectable } from '@angular/core';
import { GalleryMedia } from 'src/app/shared/carousel/gallery-carousel/gallery-carousel.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryModalService {
  private galleryModalOpened = new Subject<boolean>();
  galleryModalOpenedObs = this.galleryModalOpened.asObservable();
  private currentData;
  private allData;

  setGalleryModalData(currentData, allData) {
    this.currentData = currentData;
    this.allData = allData;

    // trigger model when data arrived.
    this.galleryModalOpen();
  }
  
  getGalleryModalData() {   
    return { item: this.currentData, items: this.allData }
  }

  galleryModalOpen() {
    this.galleryModalOpened.next(true);
  }
}