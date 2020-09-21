import { Injectable } from '@angular/core';

import { SearchDefineDetail, SearchIncident, SearchTrainingCourse, SearchContent, SearchTrainingCourseBatch, SearchTrainingCourseUser } from './search.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private defineDetailProducts: SearchDefineDetail;
  private incidents: SearchIncident[] = [];
  private trainingCourses: SearchTrainingCourse[] = [];
  private contents: SearchContent[] = [];
  private trainingCourseBatches: SearchTrainingCourseBatch[] = [];
  private trainingCourseUsers: SearchTrainingCourseUser[] = [];

  setDefneDetailProducts(defineDetailProducts: SearchDefineDetail) {
    this.defineDetailProducts = defineDetailProducts;
  }

  getDefneDetailProducts() {
    return this.defineDetailProducts;
  }

  setIncidents(incidents: SearchIncident[]) {
    this.incidents = incidents;
  }

  getIncidents() {
    return this.incidents;
  }

  setTrainingCourses(trainingCourses: SearchTrainingCourse[]) {
    this.trainingCourses = trainingCourses;
  }

  getTrainingCourses() {
    return this.trainingCourses;
  }

  setContents(contents: SearchContent[]) {
    this.contents = contents;
  }

  getContents() {
    return this.contents;
  }

  setTrainingCourseBatchs(trainingCourseBatches: SearchTrainingCourseBatch[]) {
    this.trainingCourseBatches = trainingCourseBatches;
  }

  getTrainingCourseBatchs() {
    return this.trainingCourseBatches;
  }

  setTrainingCourseUsers(trainingCourseUsers: SearchTrainingCourseUser[]) {
    this.trainingCourseUsers = trainingCourseUsers;
  }

  getTrainingCourseUsers() {
    return this.trainingCourseUsers;
  }
}