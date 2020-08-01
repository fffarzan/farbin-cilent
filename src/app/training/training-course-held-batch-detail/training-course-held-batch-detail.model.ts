import { TrainingCourseHeldReview } from '../training-course-held-review.model';

export class TrainingCourseHeldBatchDetail {
  constructor(
    public IDTrainingCourseBatch: string,
    public IDX: number,
    public Name_Fa: number,
    public TrainingCourse: TrainingCourseHeldReview[]
  ) { }
}