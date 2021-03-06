import { DesktopOptions } from '../../../shared/models/desktop-options-carousel.model';
import { MobileOptions } from '../../../shared/models/mobile-options-carousel.model';
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