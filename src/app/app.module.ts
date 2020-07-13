import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './header/search/search.component';
import { CatalogsComponent } from './header/catalogs/catalogs.component';
import { SupplierMenuComponent } from './navbar/supplier-menu/supplier-menu.component';
import { ContactMenuComponent } from './navbar/contact-menu/contact-menu.component';
import { DynamicSliderComponent } from './home/dynamic-slider/dynamic-slider.component';
import { CatalogPlaceholderDirective } from './header/catalogs/catalog-placeholder.directive';
import { ContactMenuPlaceholderDirective } from './navbar/contact-menu/contact-menu-placeholder.directive';
import { SupplierMenuPlaceholderDirective } from './navbar/supplier-menu/supplier-menu-placeholder.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    CatalogsComponent,
    SupplierMenuComponent,
    ContactMenuComponent,
    DynamicSliderComponent,
    CatalogPlaceholderDirective,
    ContactMenuPlaceholderDirective,
    SupplierMenuPlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CarouselModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CatalogsComponent,
    ContactMenuComponent,
    SupplierMenuComponent
  ]
})
export class AppModule { }
