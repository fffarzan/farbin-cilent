import { DesktopOptions } from '../desktop-options-carousel.model';
import { MobileOptions } from '../mobile-options-carousel.model';
import { TrainingCourseHeldCarouselReview } from 'src/app/training/shared/training-course-held-carousel-review.model';

export class TrainingCoursesHeldCarouselParams {
  constructor(
    public imageStaticUrl: string,
    public dynamicFieldImage: string,
    public pageUrlDirection: string,
    public moreCoursesUrl: string,
    public moreCoursesUrlIdx: number,
    public dynamicFieldName1: string,
    public dynamicFieldName2: string,
    public desktopOptions: DesktopOptions,
    public mobileOptions: MobileOptions,
    public data: TrainingCourseHeldCarouselReview
  ) { }
}