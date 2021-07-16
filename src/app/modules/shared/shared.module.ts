import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { LogComponent } from './components/log/log.component';
import { StartPauseCounterComponent } from './components/start-pause-counter/start-pause-counter.component';
import { StartPauseResetComponent } from './components/start-pause-reset/start-pause-reset.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { SortingArrowImageDirective } from './directives/sorting-arrow-image.directive';



@NgModule({
  declarations: [
    CountDownTimerComponent,
    LogComponent,
    StartPauseCounterComponent,
    StartPauseResetComponent,
    SortingArrowImageDirective
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
    SortingArrowImageDirective
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
