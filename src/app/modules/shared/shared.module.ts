import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { LogComponent } from './log/log.component';
import { StartPauseCounterComponent } from './start-pause-counter/start-pause-counter.component';
import { StartPauseResetComponent } from './start-pause-reset/start-pause-reset.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './shared.service';



@NgModule({
  declarations: [
    CountDownTimerComponent,
    LogComponent,
    StartPauseCounterComponent,
    StartPauseResetComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CountDownTimerComponent,
    LogComponent,
    StartPauseCounterComponent,
    StartPauseResetComponent,
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
