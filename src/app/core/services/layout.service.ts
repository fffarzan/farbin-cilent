import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private isOverlayShown$: Subject<boolean> = new Subject<boolean>();
  isOverlayShownObs = this.isOverlayShown$.asObservable();

  showOverlay(isShown: boolean) {
    this.isOverlayShown$.next(isShown);
  }
}