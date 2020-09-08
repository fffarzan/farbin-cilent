import { Injectable } from '@angular/core';
import { GalleryMedia } from 'src/app/shared/gallery-carousel/gallery-carousel.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryModalService {
  private galleryModalOpened = new Subject<boolean>();
  galleryModalOpenedObs = this.galleryModalOpened.asObservable();
  private currentData;
  private allData;

  setGalleryModalData(currentItem, allItems) {
    this.currentData = currentItem;
    this.allData = allItems;
  }

  getGalleryModalData() {
    return { item: this.currentData, items: this.allData }
  }

  galleryModalOpen() {
    this.galleryModalOpened.next(true);
  }
}