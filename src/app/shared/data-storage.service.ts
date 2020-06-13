import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Banner } from '../home/dynamic-slider/banner.model';
import { SliderService } from '../home/dynamic-slider/slider.service';
import { Supplier } from './supplier.model';
import { SupplierService } from './supplier.service';
import { Catalog } from '../header/catalogs/catalog.model';
import { CatalogsService } from '../header/catalogs/catalogs.service';
import { Product } from './carousel/product-carousel/product.model';
import { ProductCarouselService } from './carousel/product-carousel/product-carousel.service';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private sliderService: SliderService,
    private supplierService: SupplierService,
    private catalogService: CatalogsService,
    private productCarouselService: ProductCarouselService
  ) { }

  fetchBanners() {
    return this.http
      .post<Banner[]>(
        environment.baseUrl + '/api/Banner/GetBanner/',
        '',
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
      )
      .pipe(
        tap(banners => {
          this.sliderService.setBanners(banners);
        })
      );
  }

  fetchSuppliers() {
    return this.http
      .post<Supplier[]>(
        environment.baseUrl + '/api/Supplier/FillSupplier/',
        '',
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
      )
      .pipe(
        tap(suppliers => {
          this.supplierService.setSuppliers(suppliers);
        })
      );
  }

  fetchProducts(param: object) {
    return this.http
      .post<Product[]>(
        environment.baseUrl + '/api/DefineDetailProduct/FillAllUnderConstractionDefineDetailProduct/',
        param,
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
      )
      .pipe(
        tap(products => {
          this.productCarouselService.setProducts(products);
        })
      );
  }

  fetchCatalogs() {
    return this.http
      .post<Catalog[]>(environment.baseUrl + '/api/Catalog/FillCatalog/', '')
      .pipe(
        tap(catalogs => {
          this.catalogService.setCatalogs(catalogs);
        })
      );
  }
}