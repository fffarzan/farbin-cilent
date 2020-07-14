import { Injectable } from '@angular/core';

import { Banner } from './banner.model';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private banners: Banner[] = [];

  setBanners(banners: Banner[]) {
    this.banners = banners;
  }

  getBanners() {
    return this.banners.slice();
  }
}