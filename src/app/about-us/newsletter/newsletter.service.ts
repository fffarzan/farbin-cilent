import { Injectable } from '@angular/core';

import { Newsletters } from './newsletter-list/newsletters.model';
import { Newsletter } from './newsletter-detail/newsletter.model';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private newsletters: Newsletters;
  private newsletter: Newsletter;

  setNewsletters(newsletters: Newsletters) {
    this.newsletters = newsletters;
  }

  getNewsletters() {
    return this.newsletters;
  }

  setNewsletter(newsletter: Newsletter) {
    this.newsletter = newsletter;
  }

  getNewsletter() {
    return this.newsletter;
  }
}