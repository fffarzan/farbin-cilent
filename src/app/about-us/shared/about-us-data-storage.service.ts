import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Incident } from '../incident/incident-detail/incident.model';
import { IncidentCategory } from '../incident/incident-list/incident-category.model';
import { IncidentService } from '../incident/incident.service';
import { IncidentPreview } from '../incident/incident-list/incident-preview.model';
import { NewsletterService } from '../newsletter/newsletter.service';
import { Newsletters } from '../newsletter/newsletter-list/newsletters.model';
import { Newsletter } from '../newsletter/newsletter-detail/newsletter.model';

@Injectable({
  providedIn: 'root'
})
export class AboutUsDataStorageService {
  constructor(
    private http: HttpClient,
    private incidentService: IncidentService,
    private newsletterService: NewsletterService,
  ) { }

  handleError(err: object) {
    console.error(err);

    return throwError('An error occured' + err);
  }

  fetchIncidentPreviews() {
    return this.http
      .post<IncidentPreview[]>(
        environment.baseUrl + '/api/Incident/GetIncidentAll/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(incidentPreviews => this.incidentService.setIncidentPreviews(incidentPreviews))
      );
  }

  fetchIncident(param: object) {
    return this.http
      .post<Incident>(
        environment.baseUrl + '/api/Incident/GetIncidentData_ByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(incident => this.incidentService.setIncident(incident))
      );
  }

  fetchIncidentCategory() {
    return this.http
      .post<IncidentCategory[]>(
        environment.baseUrl + '/api/IncidentCategory/GetIncidentCategory/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(incidentCategories => this.incidentService.setIncidentCategories(incidentCategories))
      );
  }

  fetchNewsletters() {
    return this.http
      .post<Newsletters>(
        environment.baseUrl + '/api/ContentCategoryType/FillNewsLetterCategoryComplete/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(newletters => this.newsletterService.setNewsletters(newletters))
      );
  }

  fetchNewsletter(param: object) {
    return this.http
      .post<Newsletter>(
        environment.baseUrl + '/api/Content/FillContentByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(newsletter => this.newsletterService.setNewsletter(newsletter))
      );
  }

  fetchUnsubscribeData(param: object) {
    return this.http
    .post<{ Email: string }>(
      environment.baseUrl + '/api/NewsLetter/Unsubscribe/',
      param,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
    .pipe(
      catchError(err => this.handleError(err))
    );
  }
}