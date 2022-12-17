import { Component, OnInit } from '@angular/core';
import { UserDataService } from './../services/user-data.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
/**
 * @title Styling columns using their auto-generated column names
 */
export class UserListComponent implements OnInit {
  constructor(private userService: UserDataService) {
    // userService = userService
  }

  ngOnInit(): void {
    let data = this.userService.getUserData().subscribe((res) => { 
      });

  }
  displayedColumns: string[] = [
    'demo-position',
    'demo-name',
    'demo-weight',
    'demo-symbol',
    'demo-other',
  ];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 44, name: 'Lewis Hamilton', weight: 'L.Hamilton', symbol: 'H' },
  {
    position: 33,
    name: 'Max Verstappen',
    weight: 'M.Verstappen',
    symbol: 'He',
  },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
