import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Route2Service {

  constructor(private http: HttpClient) { }
  
  getStoreData(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }
}

export enum ViewType {
  ListView = "ListView",
  GridView = "GridView"
}



