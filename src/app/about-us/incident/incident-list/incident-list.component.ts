import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { IncidentCategory } from './incident-category.model';
import { IncidentService } from '../incident.service';
import { IncidentPreview } from './incident-preview.model';
import { environment } from '../../../../environments/environment';
import { ExtensionMethodService } from '../../../shared/extension-method.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: [
    './incident-list.component.css',
    '../../shared/shared-style.css'
  ]
})
export class IncidentListComponent implements OnInit {
  incidentCategories: IncidentCategory[];
  incidentPreviews: IncidentPreview[];
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  isCategoryExist = true;

  constructor(
    private dataStorageService: DataStorageService,
    private incidentService: IncidentService,
    private extensionMethodService: ExtensionMethodService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchIncidentCategory().subscribe(() => this.incidentCategories = this.incidentService.getIncidentCategories());
    
    this.dataStorageService.fetchIncidentPreviews().subscribe(() => {
      this.incidentPreviews = this.incidentService.getIncidentPreviews();

      const incidentsLength = this.incidentPreviews.length;
      for (let i = 0; i < incidentsLength; i++) {
        this.incidentPreviews[i].EndDate = this.changeDateFormat(this.incidentPreviews[i].EndDate);
        this.incidentPreviews[i].StartDate = this.changeDateFormat(this.incidentPreviews[i].StartDate);
      }
    });
  }

  private changeDateFormat(date: string) {
    if (date) return <string>this.extensionMethodService.ginj(date.split('T')[0].replace('-', '/').replace('-', '/'), true);
  }

  filterIncidents(id: number) {

  }
}
