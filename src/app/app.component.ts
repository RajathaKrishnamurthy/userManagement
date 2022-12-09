import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isAuthenticated: boolean = false;
  public title: string = 'User Management';
  constructor() {}

  public logout(): void {}
}
