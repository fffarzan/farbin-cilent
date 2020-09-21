import { Component, OnInit, Renderer2, ElementRef, ViewChild, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LayoutDataStorageService } from 'src/app/layout/shared/layout-data-storage.service';
import { SearchService } from './search.service';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import { SearchTrainingCourse, SearchTrainingCourseUser, SearchTrainingCourseBatch, SearchIncident, SearchDefineDetail, SearchContent } from './search.model';
import { searchTemplateState } from './search.animation';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    searchTemplateState
  ]
})
export class SearchComponent implements OnInit, OnChanges, OnDestroy {
  @Output() hideOtherIcons = new EventEmitter<void>();
  @Input() searchClosing: boolean;
  enviornment: { production: boolean, baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  searchText: string = "";
  isSearchTemplateOpen: boolean = false;
  searchTemplateState: string = 'close';
  isMobileSearchListShown: boolean = false;
  searchDefineDetail: SearchDefineDetail = undefined;
  searchContent: SearchContent[] = [];
  searchTrainingCourses: SearchTrainingCourse[] = [];
  searchTrainingCourseUsers: SearchTrainingCourseUser[] = [];
  searchTrainingCourseBatchs: SearchTrainingCourseBatch[] = [];
  searchIncidents: SearchIncident[] = [];
  searchDefineDetailSub: Subscription;
  searchContentSub: Subscription;
  searchTrainingCoursesSub: Subscription;
  searchTrainingCourseUsersSub: Subscription;
  searchTrainingCourseBatchsSub: Subscription;
  searchIncidentsSub: Subscription;

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private layoutDataStorageService: LayoutDataStorageService,
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
    this.searchDefineDetail = undefined;
    this.searchContent = [];
    this.searchTrainingCourses = [];
    this.searchTrainingCourseUsers = [];
    this.searchTrainingCourseBatchs = [];
    this.searchIncidents = [];

    if (str.length > 2) {
      if (this.isMobile) this.isMobileSearchListShown = true;

      // this.renderer.setStyle(this.mobileSearchList.nativeElement, 'display', 'block');

      // $('.SearchModule-ImgLoaderSearch').fadeIn();

      this.getProductsData(str);
      this.getCotentData(str);
      this.getTrainingCoursesData(str);
      this.getTrainingCoursesData(str);
      this.getTriningCoursesUsersData(str);
      this.getTrainingCoursesBatch(str);
      this.getIncidentsData(str);
    }
  }

  ngOnDestroy() {
    this.searchDefineDetailSub.unsubscribe();
    this.searchContentSub.unsubscribe();
    this.searchTrainingCoursesSub.unsubscribe();
    this.searchTrainingCourseUsersSub.unsubscribe();
    this.searchTrainingCourseBatchsSub.unsubscribe();
    this.searchIncidentsSub.unsubscribe();
  }

  private getProductsData(str: string) {
    this.searchDefineDetailSub = this.layoutDataStorageService.fetchSearchDefineDetailProducts({ SearchText: str })
      .subscribe(() => this.searchDefineDetail = this.searchService.getDefneDetailProducts());
  }

  private getCotentData(str: string) {
    this.searchContentSub = this.layoutDataStorageService.fetchSearchContent({ SearchText: str })
      .subscribe(() => this.searchContent = this.searchService.getContents());
  }

  private getTrainingCoursesData(str: string) {
    this.searchTrainingCoursesSub = this.layoutDataStorageService.fetchSearchTrainingCourse({ SearchText: str })
      .subscribe(() => this.searchTrainingCourses = this.searchService.getTrainingCourses());
  }

  private getTriningCoursesUsersData(str: string) {
    this.searchTrainingCourseUsersSub = this.layoutDataStorageService.fetchSearchTrainingCourseUser({ SearchText: str })
      .subscribe(() => this.searchTrainingCourseUsers = this.searchService.getTrainingCourseUsers());
  }

  private getTrainingCoursesBatch(str: string) {
    this.searchTrainingCourseBatchsSub = this.layoutDataStorageService.fetchSearchTrainingCourseBatch({ SearchText: str })
      .subscribe(() => this.searchTrainingCourseBatchs = this.searchService.getTrainingCourseBatchs());
  }

  private getIncidentsData(str: string) {
    this.searchIncidentsSub = this.layoutDataStorageService.fetchSearchIncindent({ SearchText: str })
      .subscribe(() => this.searchIncidents = this.searchService.getIncidents());
  }
}