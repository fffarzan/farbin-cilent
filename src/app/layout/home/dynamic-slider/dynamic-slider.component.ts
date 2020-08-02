import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../../environments/environment';
import { LayoutDataStorageService } from 'src/app/layout/shared/layout-data-storage.service';
import { ExtensionMethodService } from '../../../shared/extension-method.service';
import { SliderService } from './slider.service';
import { Banner } from './banner.model';

@Component({
  selector: 'app-dynamic-slider',
  templateUrl: './dynamic-slider.component.html',
  styleUrls: ['./dynamic-slider.component.css']
})
export class DynamicSliderComponent implements OnInit, OnDestroy {
  customSlideOptions: OwlOptions = {
    items: 1,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: { 992: { dots: true } }
  };
  banners: Banner[];
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  isLandscape: boolean = this.extensionMethodService.isLandscape();
  subscription: Subscription;

  constructor(
    private sliderService: SliderService,
    private layoutDataStorageService: LayoutDataStorageService,
    private extensionMethodService: ExtensionMethodService
  ) { }

  ngOnInit(): void {
    this.subscription = this.layoutDataStorageService.fetchBanners()
      .subscribe(() => this.banners = this.sliderService.getBanners());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
