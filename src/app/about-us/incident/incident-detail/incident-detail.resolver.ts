import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Incident } from './incident.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { IncidentService } from '../incident.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentDetailResolver implements Resolve<Incident> {
  constructor(
    private dataStorageSevice: DataStorageService,
    private incidentService: IncidentService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    let incident = this.incidentService.getIncident();

    if (!incident)
      return this.dataStorageSevice.fetchIncident({ IDX: +(route.params['id']) });
    else 
      return incident;
  }
}