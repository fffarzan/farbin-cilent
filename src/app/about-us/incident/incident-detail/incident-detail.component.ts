import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Incident } from './incident.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit {
  incident: Incident;
  enviornment: { production: boolean, baseUrl: string } = environment;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.incident = data.incident[0]);
  }
}
