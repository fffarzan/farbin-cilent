import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  data;
  dataSub: Subscription;
  masterProductName: { Name_En: string };
  masterProductNameSub: Subscription;
  isScrollReachedTop: boolean = true;

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.dataSub = this.breadcrumbService.breadcrumbChange
      .subscribe(breadcrumb => this.data = breadcrumb);
    this.masterProductNameSub = this.breadcrumbService.masterProductBreadcrumbChange
      .subscribe(name => this.masterProductName = name);
  }

  onScrollTriggered() {
    this.isScrollReachedTop = false;
  }

  onScrollReachedTop() {
    this.isScrollReachedTop = true;
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
    this.masterProductNameSub.unsubscribe();
  }
}
