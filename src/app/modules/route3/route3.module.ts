import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route3Component } from './route3.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    Route3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: Route3Component,
      data: {
        via: 'Route3'
      }
    }])
  ]
})
export class Route3Module { }
