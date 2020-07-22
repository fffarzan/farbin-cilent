import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Newsletter } from './newsletter.model';

@Component({
  selector: 'app-newsletter-detail',
  templateUrl: './newsletter-detail.component.html',
  styleUrls: ['./newsletter-detail.component.css']
})
export class NewsletterDetailComponent implements OnInit {
  newsletter: Newsletter;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.newsletter = data.newsletter[0].Description_Fa);
  }
}
