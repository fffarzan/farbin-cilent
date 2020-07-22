import { Injectable } from '@angular/core';

import { Newsletters } from './newsletter-list/newsletters.model';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private newsletters: Newsletters;

  setNewsletters(newsletters: Newsletters) {
    this.newsletters = newsletters;
  }

  getNewsletters() {
    return this.newsletters;
  }
}