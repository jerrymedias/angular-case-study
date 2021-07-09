import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-start-pause-counter',
  templateUrl: './start-pause-counter.component.html',
  styleUrls: ['./start-pause-counter.component.scss']
})
export class StartPauseCounterComponent implements OnInit, OnDestroy {

  @Input('started') started: number = 0;
  @Input('paused') paused: number = 0;

  startOrPauseSubscription: Subscription | undefined;
  resetSubscription: Subscription | undefined;
  timerCountSubcription: Subscription | undefined;
  activatedRouteSubscription: Subscription | undefined;
  timer: number = 0;
  viaRoute: string = '';

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.data
      .subscribe(value => this.viaRoute = value.via);

    if (this.viaRoute === 'Route4') { 
      this.startOrPauseSubscription = this.sharedService.startOrPauseChangeSource.subscribe((data: any) => {
        if (this.timer) {
          data === 'Start' ? this.started++ : this.paused++;
        } else {
          this.started = this.paused = 0;
        }
      });
  
      this.resetSubscription = this.sharedService.resetChangeSource.subscribe((data: any) => {
        this.started = this.paused = this.timer = data;
      });
  
      this.timerCountSubcription = this.sharedService.countDownTimerDataChangeSource.subscribe((data: any) => {
        this.timer = data;
      });
    }
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription && this.activatedRouteSubscription.unsubscribe();
    if (this.viaRoute === 'Route4') { 
      this.startOrPauseSubscription && this.startOrPauseSubscription.unsubscribe();
      this.resetSubscription && this.resetSubscription.unsubscribe();
      this.timerCountSubcription && this.timerCountSubcription.unsubscribe();
    }
  }

}
