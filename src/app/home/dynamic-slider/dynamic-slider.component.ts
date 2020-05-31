import { Component, OnInit } from '@angular/core';

import { SliderService } from './slider.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-dynamic-slider',
  templateUrl: './dynamic-slider.component.html',
  styleUrls: ['./dynamic-slider.component.css']
})
export class DynamicSliderComponent implements OnInit {
  slideOptions = { items: 1, dots: true, nav: true };
  
  constructor(
    private sliderService: SliderService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchBanners().subscribe();
    console.log(this.sliderService.getBanners());
  }
}
