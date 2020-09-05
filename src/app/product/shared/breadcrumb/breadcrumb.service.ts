import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumb;
  private masterProductBreadcrumbName: { Name_En: string };
  breadcrumbChange = new Subject<any>();
  masterProductBreadcrumbChange = new Subject<{ Name_En: string }>();

  setBreadcrumb(breadcrumb) {
    this.breadcrumb = breadcrumb;
    this.breadcrumbChange.next(this.breadcrumb);
  }

  getBreadcrumb() {
    return this.breadcrumb;
  }

  setMaserProductBreadcrumbName(name: { Name_En: string }) {
    this.masterProductBreadcrumbName = name;
    this.masterProductBreadcrumbChange.next(this.masterProductBreadcrumbName);
  }

  getMasterProductBreadcrumbName() {
    return this.masterProductBreadcrumbName;
  }
}