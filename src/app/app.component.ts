import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tabsList: Array<number> = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {}

}
