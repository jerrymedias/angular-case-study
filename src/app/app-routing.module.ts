import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'route-1',
    pathMatch: 'full'
  },
  {
    path: 'route-1',
    loadChildren: ''
  },
  {
    path: 'route-2',
    loadChildren: ''
  },
  {
    path: 'route-3',
    loadChildren: ''
  },
  {
    path: 'route-4',
    loadChildren: ''
  },
  {
    path: 'route-5',
    loadChildren: ''
  },
  {
    path: 'route-6',
    loadChildren: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
