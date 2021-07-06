import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route5Component } from './route5.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Route5Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Route5Component
    }])
  ]
})
export class Route5Module { }
