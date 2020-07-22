import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { IncidentCategory } from './incident-category.model';
import { IncidentService } from '../incident.service';
import { IncidentPreview } from './incident-preview.model';
import { environment } from '../../../../environments/environment';
import { ExtensionMethodService } from '../../../shared/extension-method.service';
import { AboutUsUtils } from '../../shared/about-us-utils';

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
  filteredIncidents: IncidentPreview[] = [];
  incidentCategoryIds: string[] = [];
  isFilterOpen: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private incidentService: IncidentService,
    private extensionMethodService: ExtensionMethodService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchIncidentCategory().subscribe(() => this.incidentCategories = this.incidentService.getIncidentCategories());

    this.dataStorageService.fetchIncidentPreviews().subscribe(() => {
      this.incidentPreviews = this.incidentService.getIncidentPreviews();

      this.onFilterIncidents();

      const incidentsLength = this.incidentPreviews.length;
      for (let i = 0; i < incidentsLength; i++) {
        this.incidentPreviews[i].EndDate = this.changeDateFormat(this.incidentPreviews[i].EndDate);
        this.incidentPreviews[i].StartDate = this.changeDateFormat(this.incidentPreviews[i].StartDate);
      }
    });
  }

  onToggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  onFilterIncidents(incidentCategory?: IncidentCategory) {
    this.filteredIncidents = AboutUsUtils.filterListByCategory(this.incidentPreviews, this.incidentCategoryIds, incidentCategory, 'IDIncidentCategory');
  }

  private changeDateFormat(date: string) {
    if (date) return <string>this.extensionMethodService.ginj(date.split('T')[0].replace('-', '/').replace('-', '/'), true);
  }
}
