import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IncidentService } from '../incident.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Incident } from './incident.model';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit {
  incident: any = {};

  constructor(
    private route: ActivatedRoute,
    private incidentService: IncidentService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getIncident({ IDX: +param['id'] }));
  }

  private getIncident(param: object) {
    this.dataStorageService.fetchIncident(param).subscribe(() => this.incident = this.incidentService.getIncident());
  }
}
