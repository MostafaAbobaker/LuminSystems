import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private scrollPosition = new BehaviorSubject<number>(0);

  constructor() { }
  getScrollPosition() {
    return this.scrollPosition.asObservable();
  }

  updateScrollPosition(position: number) {
    this.scrollPosition.next(position);
  }
}
