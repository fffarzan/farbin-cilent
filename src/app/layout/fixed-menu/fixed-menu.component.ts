import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FixedMenuService } from './fixed-menu.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fixed-menu',
  templateUrl: './fixed-menu.component.html',
  styleUrls: ['./fixed-menu.component.css']
})
export class FixedMenuComponent implements OnInit, OnDestroy {
  fixedMenuData: any;
  isProdutCategory = false;
  currentUrlSegment: string;
  fixedMenuDataSub: Subscription;
  routerEventSub: Subscription

  constructor(
    private router: Router,
    private location: Location,
    private fixedMenuService: FixedMenuService,
  ) {

  }

  ngOnInit(): void {
    this.routerEventSub = this.router.events.subscribe(() => {
      this.currentUrlSegment = this.location.path().split('/')[2];
      this.getFixedMenuData();

      if (this.currentUrlSegment === 'product-category') {
        this.isProdutCategory = true;
      } else {
        this.isProdutCategory = false;
      }
    })
  }

  ngOnDestroy() {
    this.fixedMenuDataSub.unsubscribe();
    this.routerEventSub.unsubscribe();
  }

  private getFixedMenuData() {
    this.fixedMenuDataSub = this.fixedMenuService.getFixedMenuEvent()
      .subscribe(data => this.fixedMenuData = data);
  }
}
