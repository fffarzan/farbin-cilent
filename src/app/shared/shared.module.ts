import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgPipesModule } from 'ngx-pipes';
import { ProductCarouselComponent } from './carousel/product-carousel/product-carousel.component';
import { MobileTemplateDirective } from './carousel/mobile-template.directive';
import { GetSmallImagePipe } from './get-small-image.pipe';
import { GalleryCarouselComponent } from './carousel/gallery-carousel/gallery-carousel.component';

@NgModule({
  declarations: [
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent,
    GalleryCarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule,
    NgPipesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule,
    NgPipesModule,
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent,
    GalleryCarouselComponent
  ]
})
export class SharedModule { }