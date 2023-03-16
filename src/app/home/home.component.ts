import { Component, OnInit } from '@angular/core';
interface Names {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-test',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  names: Names[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  uploadText: string =
    'Naming convention - <member code>_Insurance Policy_ <valid to date DDMMYY>';
  ngOnInit(): void {}
}
