import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ExtensionMethodService } from '../../shared/extension-method.service';
import { SliderService } from './slider.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Banner } from './banner.model';

@Component({
  selector: 'app-dynamic-slider',
  templateUrl: './dynamic-slider.component.html',
  styleUrls: ['./dynamic-slider.component.css']
})
export class DynamicSliderComponent implements OnInit {
  slideOptions = { 
    items: 1, 
    dots: false, 
    nav: true, 
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
      992:{
        dots: true
      }
    }
  };
  CarouselOptions = { 
    items: 0, 
    dots: false, 
    nav: false
  }; 
  banners: Banner[];
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  isLandscape: boolean = this.extensionMethodService.isLandscape();
  
  constructor(
    private sliderService: SliderService,
    private dataStorageService: DataStorageService,
    private extensionMethodService: ExtensionMethodService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchBanners().subscribe();

    this.banners = this.sliderService.getBanners();
  }
}
