import { Component, OnInit } from '@angular/core';

import { SliderService } from './slider.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Banner } from './banner.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dynamic-slider',
  templateUrl: './dynamic-slider.component.html',
  styleUrls: ['./dynamic-slider.component.css']
})
export class DynamicSliderComponent implements OnInit {
  slideOptions = { items: 1, dots: true, nav: true };
  banners: Banner[];
  enviornment: { production: boolean, baseUrl: string } = environment;
  
  constructor(
    private sliderService: SliderService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchBanners().subscribe();
    console.log(this.sliderService.getBanners());
    this.banners = this.sliderService.getBanners();
  }
}
