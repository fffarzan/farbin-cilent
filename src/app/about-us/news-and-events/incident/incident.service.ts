import { Injectable } from '@angular/core';

import { Incident } from './incident-detail/incident.model';
import { IncidentCategory } from './incident-archive/incident-category.model';
import { IncidentPreview } from './incident-archive/incident-preview.model';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  incident: Incident;
  incidentPreviews: IncidentPreview[] = [];
  incidentCategories: IncidentCategory[] = [];

  setIncident(incident: Incident) {
    this.incident = incident;
  }

  getIncident() {
    return this.incident;
  }

  setIncidentPreviews(incidentPreviews: IncidentPreview[]) {
    this.incidentPreviews = incidentPreviews;
  }

  getIncidentPreviews() {
    return this.incidentPreviews.slice();
  }

  setIncidentCategories(incidentCategories: IncidentCategory[]) {
    this.incidentCategories = incidentCategories;
  }

  getIncidentCategories() {
    return this.incidentCategories.slice();
  }
}