import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit, OnChanges, OnDestroy {

  startPausedLogs: Array<{startedOrPaused: string, time: Date}> = [];
  startOrPauseSubscription: Subscription | undefined;
  resetSubscription: Subscription | undefined;
  
  @Input('startedOrPaused') startedOrPaused: string = '';

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.startOrPauseSubscription = this.sharedService.startOrPauseChangeSource.subscribe((data: any) => {
      this.startedOrPaused = data;
      this.pushIntoLogs();
    });

    this.resetSubscription = this.sharedService.resetChangeSource.subscribe((data: any) => {
      this.emptyLogs();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.startedOrPaused?.currentValue) {
      this.pushIntoLogs();
    } else {
      this.emptyLogs();
    }
  }

  ngOnDestroy(): void {
    this.startOrPauseSubscription && this.startOrPauseSubscription.unsubscribe();
    this.resetSubscription && this.resetSubscription.unsubscribe();
  }

  pushIntoLogs(): void {
    this.startPausedLogs.push({
      startedOrPaused: this.startedOrPaused === 'Start' ? 'Started' : 'Paused',
      time: new Date()
    });
  }

  emptyLogs(): void {
    this.startPausedLogs = [];
  }

}
