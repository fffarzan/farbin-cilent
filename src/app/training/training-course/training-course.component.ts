import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TrainingCourseService } from './training-course.service';
import { ActivatedRoute } from '@angular/router';
import { TrainingCourse } from './training-course.model';
import { TrainingCoursesHeldReviewForCourse } from './training-courses-held-review for-course.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-training-course',
  templateUrl: './training-course.component.html',
  styleUrls: ['./training-course.component.css']
})
export class TrainingCourseComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  courseId: number;
  course: TrainingCourse;
  coursesHeld: TrainingCoursesHeldReviewForCourse;

  constructor(
    private dataStorageService: DataStorageService,
    private trainingCourseService: TrainingCourseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.courseId = +param['id'];
      this.getTrainingCourseData(+param['id']);    
    });
  }

  private getTrainingCourseData(id: number) {
    this.dataStorageService.fetchTrainingCourse({ IDX: id }).subscribe(() => {
      this.course = this.trainingCourseService.getTrainingCourse()[0];

      // get held courses from this course.
      this.getTrainingCoursesHeldData(this.course.Name_Fa);
    });
  }
  
  private getTrainingCoursesHeldData(courseName: string) {
    this.dataStorageService.fetchTrainingCoursesHeldFromCourse({ UniqueName: courseName }).subscribe(() => {
      this.coursesHeld = this.trainingCourseService.getTrainingCoursesHeld();

      // split string and create an object.
      let coursesHeldLength = Object.keys(this.coursesHeld).length;
      for(let i = 0; i < coursesHeldLength; i++) {
        if (this.coursesHeld[i].Items) this.coursesHeld[i].Items = JSON.parse(this.coursesHeld[i].Items);
      }
    });

  }
}
