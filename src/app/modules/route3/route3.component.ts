import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component implements OnInit {

  countDownTimer: number = 0;
  startedOrPaused: string = '';
  started: number = 0;
  paused: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startOrPause(startOrPause: string): void {
    this.startedOrPaused = startOrPause;
    if (startOrPause === 'Start') {
      this.started++;
    } else {
      this.paused++;
    }
  }

  resetClicked(): void {
    this.countDownTimer = 0;
    this.started = 0;
    this.paused = 0;
    this.startedOrPaused = '';
  }

  timerCountChange(count: number): void {
    this.countDownTimer = count;
  }

}
