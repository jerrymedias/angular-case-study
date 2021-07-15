import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit, OnChanges, OnDestroy {

  @Input('timer') timer: number = 0;
  @Input('startOrPause') startOrPause: string = '';

  timerInterval: any;
  startOrPauseSubscription: Subscription | undefined;
  resetSubscription: Subscription | undefined;
  timerCountSubcription: Subscription | undefined;
  activatedRouteSubscription: Subscription | undefined;
  viaRoute: string = '';

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(value => this.viaRoute = value.via);

    if (this.viaRoute === 'Route4') {
      this.startOrPauseSubscription = this.sharedService.startOrPauseChangeSource.subscribe((data: any) => {
        this.startOrPause = data;
        this.startOrPauseTimer();
      });
  
      this.resetSubscription = this.sharedService.resetChangeSource.subscribe((data: any) => {
        this.timer = data;
        this.timerInterval && clearInterval(this.timerInterval);
      });
  
      this.timerCountSubcription = this.sharedService.countDownTimerDataChangeSource.subscribe((data: any) => {
        this.timer = data;
        !this.timer && this.timerInterval && clearInterval(this.timerInterval);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.startOrPause?.currentValue && this.timer) {
      this.startOrPauseTimer();
    } else if (changes.timer?.currentValue === 0 && this.timerInterval) {
      clearInterval(this.timerInterval);
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

  startOrPauseTimer(): void {
    if (this.startOrPause === 'Start') {
      this.timerInterval = setInterval(() => {
        this.timer--;
      }, 1000);
    } else {
      clearInterval(this.timerInterval);
    }
  }

}
