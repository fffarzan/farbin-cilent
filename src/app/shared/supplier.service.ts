import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http: HttpClient) { }

  getSuppliers() {
    return this.http
      // .post(environment.baseUrl + '/api/Supplier/FillSupplier/')
  }
}