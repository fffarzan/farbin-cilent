import { Injectable } from '@angular/core';

import { Catalog } from './catalog.model';

@Injectable({ providedIn: 'root' })
export class CatalogsService {
  private catalogs: Catalog[] = [];

  setCatalogs(catalogs: Catalog[]) {
    this.catalogs = catalogs;
  }

  getCatalogs() {
    return this.catalogs.slice();
  }
}