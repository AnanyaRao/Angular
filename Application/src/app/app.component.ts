import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  courseName;
  colorname;
  totalPrice;
  register(course){
this.courseName=course;
  }
  setTotalPrice(totalPrice){
    this.totalPrice=totalPrice;

  }
colorSet(){
  this.colorname=this.courseName;
}

}
