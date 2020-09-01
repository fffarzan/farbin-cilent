import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumb;

  setBreadcrumb(breadcrumb) {
    this.breadcrumb = breadcrumb;
  }

  getBreadcrumb() {
    return this.breadcrumb;
  }
}