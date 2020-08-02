import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AboutUsDataStorageService } from '../../shared/about-us-data-storage.service';
import { NewsletterService } from '../newsletter.service';
import { Newsletters } from './newsletters.model';

@Component({
  selector: 'app-newsletter-list',
  templateUrl: './newsletter-list.component.html',
  styleUrls: [
    './newsletter-list.component.css',
    '../../shared/shared-style.css'
  ]
})
export class NewsletterListComponent implements OnInit, OnDestroy {
  newsletters: Newsletters;
  titleIndex: number;
  subscription: Subscription;

  constructor(
    private newsletterService: NewsletterService,
    private aboutUsDataStorageService: AboutUsDataStorageService
  ) { }

  ngOnInit(): void {
    this.subscription = this.aboutUsDataStorageService.fetchNewsletters().subscribe(() => {
      this.newsletters = this.newsletterService.getNewsletters()[0];
      this.onSetTab(Object.keys(this.newsletters.ContentCategory).length - 1);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSetTab(itemIndex: number) {
    this.titleIndex = itemIndex;
  }
}
