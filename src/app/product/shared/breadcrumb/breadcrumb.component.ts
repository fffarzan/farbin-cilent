import { Component, OnInit, DoCheck } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, DoCheck {
  data;

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.data = this.breadcrumbService.getBreadcrumb();
  }

  ngDoCheck() {
    this.data = this.breadcrumbService.getBreadcrumb();
  }
}
