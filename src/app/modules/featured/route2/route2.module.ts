import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route2Component } from './route2.component';
import { RouterModule } from '@angular/router';
import { Route2Service } from './route2.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    Route2Component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: Route2Component
    }])
  ],
  providers: [Route2Service]
})
export class Route2Module { }
