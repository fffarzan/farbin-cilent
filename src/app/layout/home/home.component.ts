import { Component, OnInit } from '@angular/core';
import { ProductCarouselParams } from '../../shared/product-carousel/product-carousel-params.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productCarouselParams: ProductCarouselParams = {
    staticUrl: '',
    dynamicFieldName: 'PicUrl',
    pageUrlDirection: 'DefineDetailProduct',
    desktopOptions: {
      stagePadding: 0,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: false,
      responsive: { 1024: { items: 6 } }
    },
    mobileOptions: {
      mobileItems: {
        maxSize: 500,
        items: 2.1
      },
      tabletItems: {
        maxSize: 768,
        items: 0
      },
      desktopItems: {
        maxSize: 1024,
        items: 4
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
