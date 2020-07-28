import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {
  targetEmail: string;
  isUnsubscribed: boolean = false;
  isNotUnsubscribed: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.targetEmail = param['email']);
  }

  onUnsubscribe() {
    this.dataStorageService.fetchUnsubscribeData({ Email: this.targetEmail }).subscribe(
      result => this.isUnsubscribed = true,
      err => this.isNotUnsubscribed = true
    );
  }

}
