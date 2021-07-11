import { Component, OnInit } from '@angular/core';
import { Route2Service } from './route2.service';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  storeData: Array<any> = [];
  selectedViewType: string = 'GridView';
  loading: boolean = true;

  constructor(private route2Service: Route2Service) { }

  ngOnInit(): void {
    this.route2Service.getStoreData().subscribe(res => {
      this.loading = false;
      this.storeData = res;
    });
  }

  changeView(view: string): void {
    this.selectedViewType = view;
  }

  sortByPrice(sortType: string): void {
    this.storeData.sort((a, b) => (sortType === 'ascending' ? a.price < b.price : a.price > b.price) ? -1 : 1);
  }

}
