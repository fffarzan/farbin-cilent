import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Banner } from '../home/dynamic-slider/banner.model';
import { SliderService } from '../home/dynamic-slider/slider.service';
import { Supplier } from '../navbar/product-brands/supplier.model';
import { SupplierService } from '../navbar/product-brands/supplier.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private sliderService: SliderService,
    private supplierService: SupplierService
  ) { }

  fetchBanners() {
    return this.http
      .post<Banner[]>(environment.baseUrl + '/api/Banner/GetBanner/', '')
      .pipe(
        tap(banners => {
          this.sliderService.setBanners(banners);
        })
      );
  }

  fetchSuppliers() {
    return this.http
      .post<Supplier[]>(environment.baseUrl + '/api/Supplier/FillSupplier/', '')
      .pipe(
        tap(suppliers => {
          this.supplierService.setSuppliers(suppliers);
        })
      );
  }
}