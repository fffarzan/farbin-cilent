import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Newsletter } from './newsletter.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { NewsletterService } from '../newsletter.service';

@Injectable({
  providedIn: 'root'
})
export class NewsletterDetailResolver implements Resolve<Newsletter> {
  constructor(
    private dataStorageSevice: DataStorageService,
    private newsletterService: NewsletterService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    let newsletter = this.newsletterService.getNewsletter();

    if (!newsletter)
      return this.dataStorageSevice.fetchNewsletter({ IDX: +(route.params['id']) });
    else 
      return newsletter;
  }
}