import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AboutUsDataStorageService } from '../../shared/about-us-data-storage.service';
import { IncidentService } from '../incident.service';
import { Incident } from './incident.model';
import { GalleryCarousel } from 'src/app/shared/carousel/gallery-carousel/gallery-carousel.model';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit, OnDestroy {
  incident: Incident;
  enviornment: { production: boolean, baseUrl: string } = environment;
  imageGalleryData: GalleryCarousel = {
    media: null,
    staticUrl: 'assets/img/docx.png',
    dynamicImagePropertyName: 'Url',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 } }
    },
    mobileOptions: {
      mobileItems: {
        maxSize: 500,
        items: 1.7
      },
      tabletItems: {
        maxSize: 768,
        items: 0
      },
      desktopItems: {
        maxSize: 1024,
        items: 5
      }
    }
  };
  videoGalleryData: GalleryCarousel = {
    media: null,
    staticUrl: 'assets/img/docx.png',
    dynamicImagePropertyName: 'Url',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 } }
    },
    mobileOptions: {
      mobileItems: {
        maxSize: 500,
        items: 1.7
      },
      tabletItems: {
        maxSize: 768,
        items: 0
      },
      desktopItems: {
        maxSize: 1024,
        items: 5
      }
    }
  };
  greetingGalleryData: GalleryCarousel = {
    media: null,
    staticUrl: 'assets/img/docx.png',
    dynamicImagePropertyName: 'Url',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 } }
    },
    mobileOptions: {
      mobileItems: {
        maxSize: 500,
        items: 1.7
      },
      tabletItems: {
        maxSize: 768,
        items: 0
      },
      desktopItems: {
        maxSize: 1024,
        items: 5
      }
    }
  };
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private aboutUsDataStorageSevice: AboutUsDataStorageService,
    private incidentService: IncidentService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getIncidentDetailData(param['id']));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getIncidentDetailData(id: number) {
    this.subscription = this.aboutUsDataStorageSevice.fetchIncident({ IDX: id })
      .subscribe(() => {
        this.incident = this.incidentService.getIncident()[0];

        this.imageGalleryData.media = this.incident.Images;
        this.videoGalleryData.media = this.incident.Videos;
        this.greetingGalleryData.media = this.incident.Greetings;
      });
  }
}
