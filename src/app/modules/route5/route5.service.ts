import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class Route5Service {

  constructor() { }

  getStudentMarks(): Observable<Array<any>> {
    return of(
      [
        {
          name: 'Yogesh',
          class: 9,
          section: 'A',
          math: 85,
          physics: 65,
          computer: 33
        },
        {
          name: 'Ravi',
          class: 11,
          section: 'G',
          math: 95,
          physics: 75,
          computer: 93
        },
        {
          name: 'Ankit',
          class: 6,
          section: 'F',
          math: 9,
          physics: 53,
          computer: 73
        },
        {
          name: 'Elvis',
          class: 8,
          section: 'L',
          math: 29,
          physics: 33,
          computer: 43
        },
        {
          name: 'Rahul',
          class: 12,
          section: 'Q',
          math: 7,
          physics: 13,
          computer: 3
        },
        {
          name: 'Zahid',
          class: 3,
          section: 'V',
          math: 70,
          physics: 63,
          computer: 19
        },
        {
          name: 'Keshav',
          class: 1,
          section: 'D',
          math: 55,
          physics: 58,
          computer: 40
        },
        {
          name: 'Piyush',
          class: 4,
          section: 'P',
          math: 67,
          physics: 73,
          computer: 43
        },
        {
          name: 'Ayush',
          class: 2,
          section: 'M',
          math: 67,
          physics: 30,
          computer: 43
        },
        {
          name: 'Aditya',
          class: 5,
          section: 'Z',
          math: 58,
          physics: 59,
          computer: 60
        },
        {
          name: 'Vivek',
          class: 10,
          section: 'E',
          math: 68,
          physics: 89,
          computer: 20
        }
      ]
    )
  }
}
