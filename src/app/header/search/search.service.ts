import { Injectable } from '@angular/core';

import { SearchDefineDetail, SearchIncident, SearchTrainingCourse, SearchContent, SearchTrainingCourseBatch, SearchTrainingCourseUser } from './search.model';

@Injectable()
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

  setIncidents(incidents: SearchIncident[]) {
    this.incidents = incidents;
  }

  getIncidents() {
    return this.incidents.slice();
  }

  setTrainingCourses(trainingCourses: SearchTrainingCourse[]) {
    this.trainingCourses = trainingCourses;
  }

  getTrainingCourses() {
    return this.trainingCourses.slice();
  }

  setContents(contents: SearchContent[]) {
    this.contents = contents;
  }

  getContents() {
    return this.contents.slice();
  }

  setTrainingCourseBatchs(trainingCourseBatches: SearchTrainingCourseBatch[]) {
    this.trainingCourseBatches = trainingCourseBatches;
  }

  getTrainingCourseBatchs() {
    return this.trainingCourseBatches.slice();
  }

  setTrainingCourseUsers(trainingCourseUsers: SearchTrainingCourseUser[]) {
    this.trainingCourseUsers = trainingCourseUsers;
  }

  getTrainingCourseUsers() {
    return this.trainingCourseUsers.slice();
  }
}