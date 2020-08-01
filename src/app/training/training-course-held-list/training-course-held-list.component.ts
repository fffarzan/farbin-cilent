import { Component, OnInit } from '@angular/core';

import { TrainingCourseHeldList } from './training-course-held-list.model';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TrainingCourseHeldListService } from './training-course-held-list.service';

@Component({
  selector: 'app-training-course-held-list',
  templateUrl: './training-course-held-list.component.html',
  styleUrls: ['./training-course-held-list.component.css']
})
export class TrainingCourseHeldListComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  coursesHeldList: TrainingCourseHeldList[];

  constructor(
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService,
    private trainingCourseHeldListService: TrainingCourseHeldListService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.getTrainingCourseHeldListData(param['id']));
  }

  private getTrainingCourseHeldListData(objectId: number) {
    this.dataStorageService.fetchTrainingCourseHeldList({ IDX: objectId }).subscribe(() => this.coursesHeldList = this.trainingCourseHeldListService.getTrainingCourseHeldList());
  }
}
