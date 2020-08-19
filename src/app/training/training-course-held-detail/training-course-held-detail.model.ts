import { TrainingCourseReviewDetail } from '../training-course-review.model';

import { GalleryMedia } from 'src/app/shared/gallery-carousel/gallery-carousel.model';
import { TrainingCourseHeldAttendanceCarousel } from '../shared/training-course-held-attendance-carousel/training-course-held-attendance-carousel.model';

export class TrainingCourseHeldDetail {
  constructor(
    public Confirmation: GalleryMedia,
    public Description: string,
    public EndDate: string,
    public IDTrainingCourse: string,
    public IDTrainingCourseCategory: string,
    public IDX: number,
    public ImageGallery: GalleryMedia,
    public Name_Fa: string,
    public PicUrl: string,
    public Status: number,
    public TrainingCourseCategory: TrainingCourseReviewDetail,
    public TrainingCouseUser: TrainingCourseHeldAttendanceCarousel,
  ) { }
}