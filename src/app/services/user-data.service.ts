import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from './user.json';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  getUserData() {
    // http://ergast.com/api/f1/2022/drivers
    return this.http.get('./user.json').subscribe((res) => {
      debugger;
      // return res;
    });
    // debugger;
    // return data;
  }
}
