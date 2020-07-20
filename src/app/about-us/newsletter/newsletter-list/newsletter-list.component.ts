import { Component, OnInit } from '@angular/core';

import { NewsletterService } from '../newsletter.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Newsletters } from './newsletters.model';

@Component({
  selector: 'app-newsletter-list',
  templateUrl: './newsletter-list.component.html',
  styleUrls: [
    './newsletter-list.component.css',
    '../../shared/shared-style.css'
  ]
})
export class NewsletterListComponent implements OnInit {
  newsletters: Newsletters;

  constructor(
    private newsletterService: NewsletterService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchNewsletters().subscribe(() => this.newsletters = this.newsletterService.getNewsletters()) 
  }

}
