import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AboutUsDataStorageService } from '../../shared/about-us-data-storage.service';
import { NewsletterService } from '../newsletter.service';
import { Newsletter } from './newsletter.model';

@Component({
  selector: 'app-newsletter-detail',
  templateUrl: './newsletter-detail.component.html',
  styleUrls: ['./newsletter-detail.component.css']
})
export class NewsletterDetailComponent implements OnInit, OnDestroy {
  newsletter: Newsletter;
  subsrciption: Subscription;

  constructor(
    private route: ActivatedRoute,
    private aboutUsDataStorageSevice: AboutUsDataStorageService,
    private newsletterService: NewsletterService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getNewsLetterDetailData(param['id']));
  }

  ngOnDestroy() {
    this.subsrciption.unsubscribe();
  }

  private getNewsLetterDetailData(id: number) {
    this.subsrciption = this.aboutUsDataStorageSevice.fetchNewsletter({ IDX: id })
      .subscribe(() => this.newsletter = this.newsletterService.getNewsletter());
  }
}
