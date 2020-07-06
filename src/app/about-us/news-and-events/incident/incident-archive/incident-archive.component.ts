import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { IncidentCategory } from './incident-category.model';
import { IncidentService } from '../incident.service';
import { IncidentPreview } from './incident-preview.model';

@Component({
  selector: 'app-incident-archive',
  templateUrl: './incident-archive.component.html',
  styleUrls: ['./incident-archive.component.css']
})
export class IncidentArchiveComponent implements OnInit {
  incidentCategories: IncidentCategory[];
  incidentPreviews: IncidentPreview[];

  constructor(
    private dataStorageService: DataStorageService,
    private incidentService: IncidentService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchIncidentCategory().subscribe(() => this.incidentCategories = this.incidentService.getIncidentCategories());
    this.dataStorageService.fetchIncidentPreviews().subscribe(() => this.incidentPreviews = this.incidentService.getIncidentPreviews());
  }
}
