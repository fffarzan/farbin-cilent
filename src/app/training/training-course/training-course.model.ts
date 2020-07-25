export class TrainingCourse {
  constructor(
    public Caption: string,
    public Description: string,
    public IDParent: string,
    public IDTrainingCourseCategory: string,
    public IDX: number,
    public Name_Fa: string,
    public ParentName: string,
    public PicUrl: string,
    public ShortDescription: string,
    public Status: number
  ) { }
}