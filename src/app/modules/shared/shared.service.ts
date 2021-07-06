import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  countDownTimerDataChangeSource = new Subject();
  resetChangeSource = new Subject();
  startOrPauseChangeSource = new Subject();

  constructor() { }

  broadcastCountDownTimerData(data: number): void {
    this.countDownTimerDataChangeSource.next(data);
  }

  broadcastReset(data: number): void {
    this.resetChangeSource.next(data);
  }

  broadcastStartOrPauseData(data: string) {
    this.startOrPauseChangeSource.next(data);
  }
}
