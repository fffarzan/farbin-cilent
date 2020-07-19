import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Incident } from './incident.model';
import { environment } from 'src/environments/environment';
import { GalleryCarousel } from 'src/app/shared/carousel/gallery-carousel/gallery-carousel.model';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit {
  incident: Incident;
  enviornment: { production: boolean, baseUrl: string } = environment;
  imageGalleryData: GalleryCarousel = {
    media: null,
    staticUrl: '/images/docx.png',
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
    staticUrl: '/images/docx.png',
    dynamicImagePropertyName: 'Url',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 }}
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
    staticUrl: '/images/docx.png',
    dynamicImagePropertyName: 'Url',
    desktopOptions: {
      stagePadding: 20,
      items: 3,
      dots: false,
      nav: false,
      autoWidth: true,
      responsive: { 1024: { items: 6 }}
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.incident = data.incident[0];
      
      this.imageGalleryData.media = this.incident.Images;
      this.videoGalleryData.media = this.incident.Videos;
      this.greetingGalleryData.media = this.incident.Greetings;
    });
  }
}
