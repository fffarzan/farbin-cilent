import { Component, OnInit, Renderer2, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { environment } from 'src/environments/environment';
import { SearchTrainingCourse, SearchTrainingCourseUser, SearchTrainingCourseBatch, SearchIncident } from './search.model';
import { searchTemplateState } from './search.animation';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    searchTemplateState
  ]
})
export class SearchComponent implements OnInit {
  @ViewChild('mobileSearchList') mobileSearchList: ElementRef;
  @Output() openSearchMenuAnimations = new EventEmitter<void>();
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  searchText: string = "";
  isSearchTemplateOpen: boolean = false;
  searchTemplateState: string = 'close';

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  openSearchMenu() {
    this.isSearchTemplateOpen = !this.isSearchTemplateOpen;
    this.searchTemplateState === 'close' ? this.searchTemplateState = 'open' : this.searchTemplateState = 'close';
    this.openSearchMenuAnimations.emit();
  }

  onModelChanged(str: string) {
  //   this.searchText = str;

  //   if (str.length > 2) {
  //     let searchTrainingCourses: SearchTrainingCourse[] = [];
  //     let searchTrainingCourseUsers: SearchTrainingCourseUser[] = [];
  //     let searchTrainingCourseBatchs: SearchTrainingCourseBatch[] = [];
  //     let searchIncidents: SearchIncident[] = []

  //     if (this.isMobile) {
  //       this.renderer.setStyle(this.mobileSearchList.nativeElement, 'display', 'block');
  //     }

  //     // $('.SearchModule-ImgLoaderSearch').fadeIn();

  //     let param = {
  //       searchText: str
  //     }

  //   } else if (str.length <= 2) {

  //   }
  }
}