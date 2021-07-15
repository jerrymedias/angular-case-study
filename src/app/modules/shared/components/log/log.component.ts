import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit, OnChanges, OnDestroy {

  startPausedLogs: Array<{startedOrPaused: string, time: Date}> = [];
  startOrPauseSubscription: Subscription | undefined;
  resetSubscription: Subscription | undefined;
  activatedRouteSubscription: Subscription | undefined;
  viaRoute: string = '';
  
  @Input('startedOrPaused') startedOrPaused: string = '';

  constructor(public sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.data
      .subscribe(value => this.viaRoute = value.via);

    if (this.viaRoute === 'Route4') { 
      this.startOrPauseSubscription = this.sharedService.startOrPauseChangeSource.subscribe((data: any) => {
        this.startedOrPaused = data;
        this.pushIntoLogs();
      });
  
      this.resetSubscription = this.sharedService.resetChangeSource.subscribe((data: any) => {
        this.emptyLogs();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.startedOrPaused?.currentValue) {
      this.pushIntoLogs();
    } else {
      this.emptyLogs();
    }
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription && this.activatedRouteSubscription.unsubscribe();
    if(this.viaRoute === 'Route4') {
      this.startOrPauseSubscription && this.startOrPauseSubscription.unsubscribe();
      this.resetSubscription && this.resetSubscription.unsubscribe();
    }
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
