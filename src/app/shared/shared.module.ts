import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgPipesModule } from 'ngx-pipes';
import { QRCodeModule } from 'angular2-qrcode'
import { ProductCarouselComponent } from './carousel/product-carousel/product-carousel.component';
import { MobileTemplateDirective } from './carousel/mobile-template.directive';
import { GetSmallImagePipe } from './get-small-image.pipe';
import { GalleryCarouselComponent } from './carousel/gallery-carousel/gallery-carousel.component';
import { TrainingCoursesHeldCarouselComponent } from './carousel/training-courses-held-carousel/training-courses-held-carousel.component';

@NgModule({
  declarations: [
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent,
    GalleryCarouselComponent,
    TrainingCoursesHeldCarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule,
    NgPipesModule,
    QRCodeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    FontAwesomeModule,
    NgPipesModule,
    QRCodeModule,
    GetSmallImagePipe,
    MobileTemplateDirective,
    ProductCarouselComponent,
    GalleryCarouselComponent,
    TrainingCoursesHeldCarouselComponent
  ]
})
export class SharedModule { }