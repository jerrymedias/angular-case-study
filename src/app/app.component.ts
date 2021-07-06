import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Assingment';
  tabsList: Array<number> = [1, 2, 3, 4, 5, 6];
  selectedTabIndex: number = 1;
  onPageReloadQuerySubscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onPageReloadQuerySubscription = this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.selectedTabIndex = queryParams.tab;
   });
  }

  navigateTo(routeNumber: number): void {
    this.selectedTabIndex = routeNumber;
    this.router.navigate([`route-${routeNumber}`], {
      queryParams: {tab: routeNumber}
    });
  }

  ngOnDestroy(): void {
    this.onPageReloadQuerySubscription && this.onPageReloadQuerySubscription.unsubscribe();
  }
}
