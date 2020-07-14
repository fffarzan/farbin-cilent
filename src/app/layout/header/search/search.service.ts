import { Injectable } from '@angular/core';

import { SearchDefineDetail, SearchIncident, SearchTrainingCourse, SearchContent, SearchTrainingCourseBatch, SearchTrainingCourseUser } from './search.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private defineDetailProducts: SearchDefineDetail[] = [];
  private incidents: SearchIncident[] = [];
  private trainingCourses: SearchTrainingCourse[] = [];
  private contents: SearchContent[] = [];
  private trainingCourseBatches: SearchTrainingCourseBatch[] = [];
  private trainingCourseUsers: SearchTrainingCourseUser[] = [];

  setDefneDetailProducts(defineDetailProducts: SearchDefineDetail[]) {
    this.defineDetailProducts = defineDetailProducts;
  }

  getDefneDetailProducts() {
    return this.defineDetailProducts.slice();
  }

  getDefineDetailProductsLength() {
    return this.defineDetailProducts.length;
  }

  setIncidents(incidents: SearchIncident[]) {
    this.incidents = incidents;
  }

  getIncidents() {
    return this.incidents.slice();
  }

  getIncidentsLength() {
    return this.incidents.length;
  }

  setTrainingCourses(trainingCourses: SearchTrainingCourse[]) {
    this.trainingCourses = trainingCourses;
  }

  getTrainingCourses() {
    return this.trainingCourses.slice();
  }

  getTrainingCoursesLength() {
    return this.trainingCourses.length;
  }

  setContents(contents: SearchContent[]) {
    this.contents = contents;
  }

  getContents() {
    return this.contents.slice();
  }

  getContentsLength() {
    return this.contents.length;
  }

  setTrainingCourseBatchs(trainingCourseBatches: SearchTrainingCourseBatch[]) {
    this.trainingCourseBatches = trainingCourseBatches;
  }

  getTrainingCourseBatchs() {
    return this.trainingCourseBatches.slice();
  }

  getTrainingCourseBatchsLength() {
    return this.trainingCourseBatches.length;
  }

  setTrainingCourseUsers(trainingCourseUsers: SearchTrainingCourseUser[]) {
    this.trainingCourseUsers = trainingCourseUsers;
  }

  getTrainingCourseUsers() {
    return this.trainingCourseUsers.slice();
  }

  getTrainingCourseUsersLength() {
    return this.trainingCourseUsers.length;
  }
}