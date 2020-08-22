import { TrainingCourseHeldAttendanceCarousel } from './training-course-held-attendance-carousel.model';
import { DesktopOptions } from 'src/app/shared/models/desktop-options-carousel.model';
import { MobileOptions } from 'src/app/shared/models/mobile-options-carousel.model';

export class TrainingCourseHeldAttendanceCarouselParam {
  constructor(
    public data: TrainingCourseHeldAttendanceCarousel,
    public desktopOptions: DesktopOptions,
    public mobileOptions: MobileOptions,
    public imageStaticUrl: string,
    public dynamicFieldImage: string,
    public pageUrlDirection: string,
    public dynamicFieldName: string
  ) { }
}