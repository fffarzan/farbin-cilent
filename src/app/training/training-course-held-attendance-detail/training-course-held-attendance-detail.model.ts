export class TrainingCourseHeldAttendanceDetail {
  constructor(
    public FName_En: string,
    public FName_Fa: string,
    public IDPersonelInCompany: string,
    public LName_En: string,
    public LName_Fa: string,
    public PicUrl: string,
    public Certifications: TrainingCourseHeldAttendanceCertification 
  ) { }
}

export class TrainingCourseHeldAttendanceCertification {
  constructor(
    public EndDate: string,
    public IDTrainingCourse: string,
    public IDX: number,
    public Name_Fa: string,
    public PicUrl: string,
    public Url: string
  ) { }
}