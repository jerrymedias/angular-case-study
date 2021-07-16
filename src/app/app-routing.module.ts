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
    loadChildren: () => import('./modules/featured/route1/route1.module').then(m => m.Route1Module)
  },
  {
    path: 'route-2',
    loadChildren: () => import('./modules/featured/route2/route2.module').then(m => m.Route2Module)
  },
  {
    path: 'route-3',
    loadChildren: () => import('./modules/featured/route3/route3.module').then(m => m.Route3Module)
  },
  {
    path: 'route-4',
    loadChildren: () => import('./modules/featured/route4/route4.module').then(m => m.Route4Module)
  },
  {
    path: 'route-5',
    loadChildren: () => import('./modules/featured/route5/route5.module').then(m => m.Route5Module)
  },
  {
    path: 'route-6',
    loadChildren: () => import('./modules/featured/route6/route6.module').then(m => m.Route6Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
