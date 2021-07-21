import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Route5Service, StudentData } from './route5.service';

type tableColumns = 'name' | 'class' | 'section' | 'math' | 'physics' | 'computer';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss']
})
export class Route5Component implements OnInit {

  studentData$: Observable<StudentData[]> | undefined;
  copyOfstudentData: StudentData[] = [];
  columnCounter: any = {};

  constructor(private route5Service: Route5Service) { }

  ngOnInit(): void {
    this.studentData$ = this.route5Service.getStudentMarks().pipe(
      tap((data: any) => this.copyOfstudentData = [...data]));
  }

  increaseCounterAndSortData(event: any): void {
    if (this.columnCounter.hasOwnProperty(event.target.id)) {
      this.columnCounter[event.target.id] === 3 ? this.columnCounter[event.target.id] = 1 : this.columnCounter[event.target.id]++;
    } else {
      this.columnCounter = {};
      this.columnCounter[event.target.id] = 1;
    }
    this.sortData(event.target.id);
  }

  sortData(col: tableColumns): void {
    if (this.columnCounter[col] === 3) {
      this.studentData$ = of(this.copyOfstudentData);
    } else {
      let studentsData = [...this.copyOfstudentData];
      studentsData.sort((a: StudentData, b: StudentData) => (this.columnCounter[col] === 1
        ? a[col] < b[col] : a[col] > b[col]) ? -1 : 1);
      this.studentData$ = of(studentsData);
    }
  }

  studentID(index: number, item: StudentData): number {
    return item.id;
  }

}
