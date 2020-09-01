import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LayoutRouting } from './layout.routing';
import { LayoutComponent } from './layout.component';
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
import { GalleryModalComponent } from './gallery-modal/gallery-modal.component';
import { GalleryModalPlaceholderDirective } from './gallery-modal/gallery-modal-placeholder.directive';
import { FixedMenuComponent } from './fixed-menu/fixed-menu.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    LayoutComponent,
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
    SupplierMenuPlaceholderDirective,
    GalleryModalComponent,
    GalleryModalPlaceholderDirective,
    FixedMenuComponent
  ],
  imports: [
    SharedModule,
    LayoutRouting,
    ProductModule
  ],
  entryComponents: [
    CatalogsComponent,
    ContactMenuComponent,
    SupplierMenuComponent,
    GalleryModalComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }