import { Component, OnInit } from '@angular/core';

import { TrainingCourseHeldList } from './training-course-held-list.model';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-training-course-held-list',
  templateUrl: './training-course-held-list.component.html',
  styleUrls: ['./training-course-held-list.component.css']
})
export class TrainingCourseHeldListComponent implements OnInit {
  enviornment: { production: boolean, baseUrl: string } = environment;
  coursesHeldList: TrainingCourseHeldList[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.coursesHeldList = data.courses);
  }
}
