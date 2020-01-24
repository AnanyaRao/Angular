import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
    year;
    age;
    currencyCode='INR'; 
  constructor() { }

  ngOnInit() {
  }
  ageCalculator(){

        this.year = new Date().getFullYear() - this.age
      } 
}
