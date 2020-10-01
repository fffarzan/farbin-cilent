import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticModalService {
  private staticModalOpened = new Subject<boolean>();
  staticModalOpenedObs = this.staticModalOpened.asObservable();
  private item: number;

  setStaticModalData(item: number) {
    this.item = item;
  }

  getStaticModalData() {
    return this.item;
  }

  staticModalOpen() {
    this.staticModalOpened.next(true);
  }
}