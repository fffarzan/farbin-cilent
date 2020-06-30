import { Component, OnInit, Renderer2, ElementRef, ViewChild, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { environment } from 'src/environments/environment';
import { SearchTrainingCourse, SearchTrainingCourseUser, SearchTrainingCourseBatch, SearchIncident, SearchDefineDetail, SearchContent } from './search.model';
import { searchTemplateState } from './search.animation';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    searchTemplateState
  ]
})
export class SearchComponent implements OnInit, OnChanges {
  @Output() hideOtherIcons = new EventEmitter<void>();
  @Input() searchClosing: boolean;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  searchText: string = "";
  isSearchTemplateOpen: boolean = false;
  searchTemplateState: string = 'close';
  isMobileSearchListShown: boolean = false;

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private dataStorageService: DataStorageService,
    private searchService: SearchService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.searchClosing) this.searchTemplateState = 'close';
  }

  openSearchMenu() {
    this.isSearchTemplateOpen = true;
    this.searchTemplateState = 'open';
    this.hideOtherIcons.emit();
  }

  onModelChanged(str: string) {
    this.searchText = str;

    if (str.length > 2) {
      let searchDefineDetail: SearchDefineDetail[] = [];
      let searchContent: SearchContent[] = [];
      let searchTrainingCourses: SearchTrainingCourse[] = [];
      let searchTrainingCourseUsers: SearchTrainingCourseUser[] = [];
      let searchTrainingCourseBatchs: SearchTrainingCourseBatch[] = [];
      let searchIncidents: SearchIncident[] = []
      let searchDefineDetailLength: number = 0;
      let searchContentLength: number = 0;
      let searchTrainingCoursesLength: number = 0;
      let searchTrainingCourseUsersLength: number = 0;
      let searchTrainingCourseBatchsLength: number = 0;
      let searchIncidentsLength: number = 0;

      if (this.isMobile) this.isMobileSearchListShown = true;
      // this.renderer.setStyle(this.mobileSearchList.nativeElement, 'display', 'block');

      // $('.SearchModule-ImgLoaderSearch').fadeIn();

      let param = {
        searchText: str
      }
      this.dataStorageService.fetchSearchDefineDetailProducts(param).subscribe();
      this.dataStorageService.fetchSearchContent(param).subscribe();
      this.dataStorageService.fetchSearchTrainingCourse(param).subscribe();
      this.dataStorageService.fetchSearchTrainingCourseUser(param).subscribe();
      this.dataStorageService.fetchSearchTrainingCourseBatch(param).subscribe();
      this.dataStorageService.fetchSearchIncindent(param).subscribe();

      searchDefineDetail = this.searchService.getDefneDetailProducts();
      searchContent = this.searchService.getContents();
      searchTrainingCourses = this.searchService.getTrainingCourses();
      searchTrainingCourseUsers = this.searchService.getTrainingCourseUsers();
      searchTrainingCourseBatchs = this.searchService.getTrainingCourseBatchs();
      searchIncidents = this.searchService.getIncidents();

      searchDefineDetailLength = this.searchService.getDefineDetailProductsLength();
      searchContentLength = this.searchService.getContentsLength();
      searchTrainingCoursesLength = this.searchService.getTrainingCoursesLength();
      searchTrainingCourseUsersLength = this.searchService.getTrainingCourseUsersLength();
      searchTrainingCourseBatchsLength = this.searchService.getTrainingCourseBatchsLength();
      searchIncidentsLength = this.searchService.getIncidentsLength();
    } else if (str.length <= 2) {

    }
  }
}