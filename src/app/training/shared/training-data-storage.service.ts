import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TrainingCourseHeldReview } from '../training-course-held-review.model';
import { TrainingService } from '../training.service';
import { TrainingCoursesReview } from '../training-course-review.model';
import { TrainingCourseService } from '../training-course/training-course.service';
import { TrainingCourse } from '../training-course/training-course.model';
import { TrainingCourseHeldList } from '../training-course-held-list/training-course-held-list.model';
import { TrainingCourseHeldListService } from '../training-course-held-list/training-course-held-list.service'
import { TrainingCourseHeldCarouselReview } from '../shared/training-course-held-carousel-review.model';
import { TrainingCourseHeldBatchListService } from '../training-course-held-batch-list/training-course-held-batch-list.service';
import { TrainingCourseHeldBatchDetailService } from '../training-course-held-batch-detail/training-course-held-batch-detail.service';
import { TrainingCourseHeldBatchDetail } from '../training-course-held-batch-detail/training-course-held-batch-detail.model';
import { TrainingCourseHeldDetail } from '../training-course-held-detail/training-course-held-detail.model';
import { TrainingCourseHeldDetailService } from '../training-course-held-detail/training-course-held-detail.service';
import { TrainingCourseHeldAttendanceDetail } from '../training-course-held-attendance-detail/training-course-held-attendance-detail.model';
import { TrainingCourseHeldAttendanceDetailService } from '../training-course-held-attendance-detail/training-course-held-attendance-detail.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingDataStorageService {
  constructor(
    private http: HttpClient,
    private trainingService: TrainingService,
    private trainingCourseService: TrainingCourseService,
    private trainingCourseHeldBatchListService: TrainingCourseHeldBatchListService,
    private trainingCourseHeldListService: TrainingCourseHeldListService,
    private trainingCourseHeldBatchDetailService: TrainingCourseHeldBatchDetailService,
    private trainingCourseHeldDetailService: TrainingCourseHeldDetailService,
    private trainingCourseHeldAttendanceDetailService: TrainingCourseHeldAttendanceDetailService
  ) { }

  handleError(err: object) {
    console.error(err);

    return throwError('An error occured' + err);
  }

  fetchTrainigCoursesReview() {
    return this.http
      .post<TrainingCoursesReview[]>(
        environment.baseUrl + '/api/TrainingCourseCategory/GetTrainingCourseCategory_Tree/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(courses => this.trainingService.setTrainingCoursesReview(courses))
      );
  }

  fetchTrainingCourseHeldReview() {
    return this.http
      .post<TrainingCourseHeldReview[]>(
        environment.baseUrl + '/api/TrainingCourse/GetTrainingCourse/',
        '',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(coursesHeld => this.trainingService.setTrainingCoursesHeldReview(coursesHeld))
      );
  }

  fetchTrainingCourse(param: object) {
    return this.http
      .post<TrainingCourse>(
        environment.baseUrl + '/api/TrainingCourseCategory/GetTrainingCourseCategoryByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(trainingCourse => this.trainingCourseService.setTrainingCourse(trainingCourse))
      )
  }

  fetchTrainingCoursesHeldFromCourse(param: object) {
    return this.http
      .post<TrainingCourseHeldCarouselReview>(
        environment.baseUrl + '/api/ContentModuleRet/GetContentModuleByUniqueName/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(trainingCoursesHeld => this.trainingCourseService.setTrainingCoursesHeld(trainingCoursesHeld))
      )
  }

  fetchTrainingCourseHeldList(param: object) {
    return this.http
      .post<TrainingCourseHeldList[]>(
        environment.baseUrl + '/api/TrainingCourse/GetDataForSiteByIDXTrainingCourseCategory/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(coursesHeldList => this.trainingCourseHeldListService.setTrainingCourseHeldList(coursesHeldList))
      )
  }

  fetchTrainingCourseHeldBatchList(param: object) {
    return this.http
      .post<TrainingCourseHeldCarouselReview[]>(
        environment.baseUrl + '/api/ContentModuleRet/GetContentModuleByUniqueName/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(coursesHeld => this.trainingCourseHeldBatchListService.setTrainingCourseHeldBatchListService(coursesHeld))
      )
  }

  fetchTrainingCourseHeldBatchDetail(param: object) {
    return this.http
      .post<TrainingCourseHeldBatchDetail>(
        environment.baseUrl + '/api/TrainingCourseBatch/GetDataForSiteWithTrainingCourse_ByIDXTrainingCourseBatch/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(batchDetail => this.trainingCourseHeldBatchDetailService.setTrainingCourseHeldBatchDetail(batchDetail))
      )
  }

  fetchTrainingCourseHeldDetail(param: object) {
    return this.http
      .post<TrainingCourseHeldDetail>(
        environment.baseUrl + '/api/TrainingCourse/GetTrainingCourseDataForSiteByIDX/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(course => this.trainingCourseHeldDetailService.setTrainingCourseHeldDetail(course))
      )
  }

  fetchTrainingCourseHeldAttendanceDetail(param: object) {
    return this.http
      .post<TrainingCourseHeldAttendanceDetail>(
        environment.baseUrl + '/api/PersonelInCompany/GetCompletePersonelInCompanyByIDXForSite/',
        param,
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        tap(person => this.trainingCourseHeldAttendanceDetailService.setTrainingCourseHeldAttendanceDetail(person))
      )
  }
}