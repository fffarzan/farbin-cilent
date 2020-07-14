import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCarouselComponent } from './carousel/product-carousel/product-carousel.component';
import { MobileTemplateDirective } from './carousel/mobile-template.directive';
import { GetSmallImagePipe } from './get-small-image.pipe';

@NgModule({
  declarations: [
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule,
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent
  ]
})
export class SharedModule { }