import { Component, OnInit } from '@angular/core';
import { ProductCarouselParams } from '../shared/carousel/product-carousel/product-carousel-params.model';

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
    owlCarouselOptions: {
      stagePadding: 20,
      items: 3,
      responsive: {
        1024: {
          items: 6
        }
      }
    },
    productCarouselOptions: { 
      itemsMobile: [500, 2.1],
      itemsTablet: [768, 0],
      itemsDesktop: [1024, 4]
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
