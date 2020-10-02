import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
})
export class RightSideComponent implements OnInit {
  isNewsAndEventsPages: boolean;
  isJobsPages: boolean

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const currentSegment = this.router.url.split('/')[2];

    if (currentSegment === 'news-and-events') this.isNewsAndEventsPages = true;
    else this.isNewsAndEventsPages = false;
  }

  onToggleMenu() {
    this.isNewsAndEventsPages = !this.isNewsAndEventsPages;
  }
}
