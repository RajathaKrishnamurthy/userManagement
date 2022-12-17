import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get('http://ergast.com/api/f1/2022/drivers');
    // .subscribe((res) => {
    //   debugger;
    //   // return res;
    // });
  }
}
