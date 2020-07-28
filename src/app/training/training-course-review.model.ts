export class TrainingCoursesReview {
  constructor(
    public IDParent: string,
    public IDTrainingCourseCategory: string,
    public IDX: number,
    public Name_Fa: string,
    public Status: number,
    public TrainingCourseCategory: TrainingCourseReviewDetail,
  ) { }
}

export class TrainingCourseReviewDetail {
  constructor(
    public Caption: string,
    public Description: string,
    public IDParent: string,
    public IDTrainingCourseCategory: string,
    public IDX: number,
    public Name_Fa: string,
    public PicUrl: string,
    public ShortDescription: string,
    public Status: number
  ) { }
}