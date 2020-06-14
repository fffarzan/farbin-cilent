import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { environment } from 'src/environments/environment';
import { SearchTrainingCourse, SearchTrainingCourseUser, SearchTrainingCourseBatch, SearchIncident } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  searchText: string = "";
  isSearchTemplateOpen: boolean = false;

  @ViewChild('mobileSearchList') mobileSearchList: ElementRef;

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  openSearchMenu() {
    this.isSearchTemplateOpen = !this.isSearchTemplateOpen
  }

  onModelChanged(str: string) {
    this.searchText = str;

    if (str.length > 2) {
      let searchTrainingCourses: SearchTrainingCourse[] = [];
      let searchTrainingCourseUsers: SearchTrainingCourseUser[] = [];
      let searchTrainingCourseBatchs: SearchTrainingCourseBatch[] = [];
      let searchIncidents: SearchIncident[] = []

      if (this.isMobile) {
        this.renderer.setStyle(this.mobileSearchList.nativeElement, 'display', 'block');
      }

      // $('.SearchModule-ImgLoaderSearch').fadeIn();

      let param = {
        searchText: str
      }


    } else if (str.length <= 2) {

    }
  }
}
