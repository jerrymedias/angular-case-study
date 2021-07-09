import { Component, OnInit } from '@angular/core';
import { Route5Service } from './route5.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss']
})
export class Route5Component implements OnInit {

  studentData: any[] = [];
  copyOfstudentData: any[]  = [];
  columnCounter: any = {};

  constructor(private route5Service: Route5Service) { }

  ngOnInit(): void {
    this.route5Service.getStudentMarks().subscribe(data => {
      this.studentData = data;
      this.copyOfstudentData = [...data];
    });
  }

  increaseCounterAndSortData(col: string): void {
    if (this.columnCounter.hasOwnProperty(col)) {
      this.columnCounter[col] === 3 ? this.columnCounter[col] = 1: this.columnCounter[col]++;
    } else {
      this.columnCounter[col] = 1;
    }
    this.sortData(col);
  }

  sortData(col: string): void {
    if (this.columnCounter[col] === 3) {
      this.studentData = this.copyOfstudentData;
      this.copyOfstudentData = [...this.copyOfstudentData];
    } else {
      this.studentData.sort((a: any, b: any) => (this.columnCounter[col] === 1
        ? a[col] < b[col] : a[col] > b[col]) ? -1 : 1);
    }
  }

}
