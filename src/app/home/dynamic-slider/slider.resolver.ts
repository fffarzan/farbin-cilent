import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Banner } from './banner.model';
import { DataStorageService } from '../../shared/data-storage.service';
import { SliderService } from './slider.service';

@Injectable({
  providedIn: 'root'
})
export class SliderResolver implements Resolve<Banner[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private sliderService: SliderService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const banners = this.sliderService.getBanners();

    if (banners.length === 0)
      return this.dataStorageService.fetchBanners();
    else 
      return banners;
  }
}