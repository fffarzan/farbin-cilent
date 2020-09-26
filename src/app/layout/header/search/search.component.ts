import {
  Component,
  OnInit,
  Renderer2,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LayoutDataStorageService } from 'src/app/layout/shared/layout-data-storage.service';
import { SearchService } from './search.service';
import { ExtensionMethodService } from 'src/app/shared/extension-method.service';
import {
  SearchTrainingCourse,
  SearchTrainingCourseUser,
  SearchTrainingCourseBatch,
  SearchIncident,
  SearchDefineDetail,
  SearchContent,
} from './search.model';
import { searchTemplateState } from './search.animation';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [searchTemplateState],
})
export class SearchComponent implements OnInit, OnChanges, OnDestroy {
  @Input() isSearchMenuOpen: boolean;
  @Input() isSearchListShow: boolean;
  @Input() searchText: string;
  @Input() isSearchContentShow: boolean;
  @Output() searchContentShow = new EventEmitter<void>();
  @Output() closeSearchMenu = new EventEmitter<void>();
  enviornment: { production: boolean; baseUrl: string } = environment;
  isMobile: boolean = this.extensionMethodService.DetectMobile();
  isTablet: boolean = this.extensionMethodService.DetectTablet();
  tempName: string;
  searchTemplateState: string;
  searchDefineDetail: SearchDefineDetail;
  searchContent: SearchContent[];
  searchTrainingCourses: SearchTrainingCourse[];
  searchTrainingCourseUsers: SearchTrainingCourseUser[];
  searchTrainingCourseBatchs: SearchTrainingCourseBatch[];
  searchIncidents: SearchIncident[];
  searchDefineDetailSub: Subscription;
  searchContentSub: Subscription;
  searchTrainingCoursesSub: Subscription;
  searchTrainingCourseUsersSub: Subscription;
  searchTrainingCourseBatchsSub: Subscription;
  searchIncidentsSub: Subscription;
  carouselItemWidth: number;
  carouselOptions = {
    items: 4,
    dots: false,
    nav: false,
    autoWidth: true,
    stagePadding: 20,
    responsive: { 1024: { items: 5 } }
  };

  constructor(
    private extensionMethodService: ExtensionMethodService,
    private layoutDataStorageService: LayoutDataStorageService,
    private searchService: SearchService,
    private renderer: Renderer2
  ) { }

  ngOnChanges(): void {
    if (!this.isSearchMenuOpen) {
      this.searchTemplateState = 'open';
      this.getSearchText(this.searchText);
    } else this.searchTemplateState = 'close';
  }

  ngOnInit(): void {
    this.searchTemplateState = 'close';
  }

  onShowCurrentTemp(tempName: string) {
    this.tempName = tempName;
    this.searchContentShow.emit();
  }

  onCloseSearchMenu() {
    this.closeSearchMenu.emit();
  }

  ngOnDestroy() {
    this.searchDefineDetailSub.unsubscribe();
    this.searchContentSub.unsubscribe();
    this.searchTrainingCoursesSub.unsubscribe();
    this.searchTrainingCourseUsersSub.unsubscribe();
    this.searchTrainingCourseBatchsSub.unsubscribe();
    this.searchIncidentsSub.unsubscribe();
  }

  private getSearchText(str: string) {
    this.searchDefineDetail = undefined;
    this.searchContent = [];
    this.searchTrainingCourses = [];
    this.searchTrainingCourseUsers = [];
    this.searchTrainingCourseBatchs = [];
    this.searchIncidents = [];

    if (str.length > 2) {
      if (this.isMobile) this.isSearchListShow = true;

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

  private getProductsData(str: string) {
    this.searchDefineDetailSub = this.layoutDataStorageService
      .fetchSearchDefineDetailProducts({ SearchText: str })
      .subscribe(
        () =>
          (this.searchDefineDetail = this.searchService.getDefneDetailProducts())
      );
  }

  private getCotentData(str: string) {
    this.searchContentSub = this.layoutDataStorageService
      .fetchSearchContent({ SearchText: str })
      .subscribe(() => (this.searchContent = this.searchService.getContents()));
  }

  private getTrainingCoursesData(str: string) {
    this.searchTrainingCoursesSub = this.layoutDataStorageService
      .fetchSearchTrainingCourse({ SearchText: str })
      .subscribe(
        () =>
          (this.searchTrainingCourses = this.searchService.getTrainingCourses())
      );
  }

  private getTriningCoursesUsersData(str: string) {
    this.searchTrainingCourseUsersSub = this.layoutDataStorageService
      .fetchSearchTrainingCourseUser({ SearchText: str })
      .subscribe(() => this.searchTrainingCourseUsers = this.searchService.getTrainingCourseUsers());
  }

  private getTrainingCoursesBatch(str: string) {
    this.searchTrainingCourseBatchsSub = this.layoutDataStorageService
      .fetchSearchTrainingCourseBatch({ SearchText: str })
      .subscribe(
        () =>
          (this.searchTrainingCourseBatchs = this.searchService.getTrainingCourseBatchs())
      );
  }

  private getIncidentsData(str: string) {
    this.searchIncidentsSub = this.layoutDataStorageService
      .fetchSearchIncindent({ SearchText: str })
      .subscribe(
        () => (this.searchIncidents = this.searchService.getIncidents())
      );
  }
}
