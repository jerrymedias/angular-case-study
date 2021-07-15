import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route5Component } from './route5.component';
import { RouterModule } from '@angular/router';
import { Route5Service } from './route5.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    Route5Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: Route5Component
    }])
  ],
  providers: [Route5Service]
})
export class Route5Module { }
