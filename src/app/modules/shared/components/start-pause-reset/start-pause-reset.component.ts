import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-start-pause-reset',
  templateUrl: './start-pause-reset.component.html',
  styleUrls: ['./start-pause-reset.component.scss']
})
export class StartPauseResetComponent implements OnInit, OnDestroy {

  timerCount: number = 0;
  startPauseButtonText: string = 'Start';
  disableInput: boolean = false;
  timerChangeTimeout: any;
  viaRoute: string = '';
  activatedRouteSubscription: Subscription | undefined;

  @Output() startOrPause: EventEmitter<string> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();
  @Output() timerCountChange: EventEmitter<number> = new EventEmitter();

  constructor(
    public activatedRoute: ActivatedRoute,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(value => this.viaRoute = value.via);
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription && this.activatedRouteSubscription.unsubscribe();
  }

  emitStartPauseToParent(): void {
    if (this.timerCount == 0) {
      alert('Enter Timit');
      return;
    }
    this.disableInput = true;
    if (this.viaRoute === 'Route3') {
      this.startOrPause.emit(this.startPauseButtonText);
    } else {
      this.sharedService.broadcastStartOrPauseData(this.startPauseButtonText);
    }
    this.startPauseButtonText = this.startPauseButtonText == 'Start' ? 'Pause' : 'Start';
  }

  emitResetToParent(): void {
    this.disableInput = false;
    this.timerCount = 0;
    this.startPauseButtonText = 'Start';
    if (this.viaRoute === 'Route3') {
      this.reset.emit();
    } else {
      this.sharedService.broadcastReset(0);
    }
  }

  emitTimerValueOnChange(): void {
    // Implemented Debounce here to delay(300ms) the emit until user is entering value
    if (this.timerChangeTimeout) clearTimeout(this.timerChangeTimeout);
    this.timerChangeTimeout = setTimeout(() => {
      this.startPauseButtonText = 'Start';
      if (this.viaRoute === 'Route3') {
        this.timerCountChange.emit(this.timerCount);
      } else {
        this.sharedService.broadcastCountDownTimerData(this.timerCount);
      }
    }, 300);
  }
}
