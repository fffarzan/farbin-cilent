import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { IncidentCategory } from './incident-category.model';
import { IncidentService } from '../incident.service';
import { IncidentPreview } from './incident-preview.model';
import { environment } from '../../../../../environments/environment';
import { ExtensionMethodService } from '../../../../shared/extension-method.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  incidentCategories: IncidentCategory[];
  incidentPreviews: IncidentPreview[];
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();

  constructor(
    private dataStorageService: DataStorageService,
    private incidentService: IncidentService,
    private extensionMethodService: ExtensionMethodService
  ) { }

  ngOnInit(): void {
    this.dataStorageService.fetchIncidentCategory().subscribe(() => this.incidentCategories = this.incidentService.getIncidentCategories());
    this.dataStorageService.fetchIncidentPreviews().subscribe(() => this.incidentPreviews = this.incidentService.getIncidentPreviews());
  }


}
