import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route2Component } from './route2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Route2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Route2Component
    }])
  ]
})
export class Route2Module { }
