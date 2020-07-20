import { Injectable } from '@angular/core';

import { NewsletterCategory } from './newsletter-list/newsletter-category.model';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private newsletters: NewsletterCategory;

  setNewsletters(newsletters: NewsletterCategory) {
    this.newsletters = newsletters;
  }

  getNewsletters() {
    return this.newsletters;
  }
}