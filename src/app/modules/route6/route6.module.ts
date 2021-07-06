import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route6Component } from './route6.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Route6Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Route6Component
    }])
  ]
})
export class Route6Module { }
