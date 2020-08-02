import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AboutUsDataStorageService } from '../../shared/about-us-data-storage.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {
  targetEmail: string;
  isUnsubscribed: boolean = false;
  isNotUnsubscribed: boolean = false;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private aboutUsDataStorageService: AboutUsDataStorageService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.targetEmail = param['email']);
  }

  onUnsubscribe() {
    this.aboutUsDataStorageService.fetchUnsubscribeData({ Email: this.targetEmail })
      .subscribe(
        result => this.isUnsubscribed = true,
        err => this.isNotUnsubscribed = true
      );
  }

}
