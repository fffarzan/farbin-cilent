import { TrainingCourseReviewDetail } from '../training-course-review.model';

export class TrainingCourseHeldDetail {
  constructor(
    public Confirmation: TrainingCourseConformation[],
    public Description: string,
    public EndDate: string,
    public IDTrainingCourse: string,
    public IDTrainingCourseCategory: string,
    public IDX: number,
    public ImageGallery: TrainingCourseImageGallery[],
    public Name_Fa: string,
    public PicUrl: string,
    public Status: number,
    public TrainingCourseCategory: TrainingCourseReviewDetail,
    public TrainingCouseUser: TrainingCourseUserReview[],
  ) { }
}

export class TrainingCourseConformation {
  constructor(
    public FileSize: number,
    public FileType: string,
    public IDGallery: string,
    public IDGalleryCategory: string,
    public IDRet: string,
    public Name_Fa: string,
    public Status: number,
    public Url: string
  ) { }
}

export class TrainingCourseImageGallery {
  constructor(
    public FileSize: number,
    public FileType: string,
    public IDGallery: string,
    public IDGalleryCategory: string,
    public IDRet: string,
    public Name_Fa: string,
    public Status: number,
    public Url: string
  ) { }
}

export class TrainingCourseUserReview {
  constructor(
    public FName_Fa: string,
    public IDPersonelInCompany: string,
    public IDX: number,
    public LName_Fa: string,
    public Name_Fa: string
  ) { }
}