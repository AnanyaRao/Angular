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
  register(course){
this.courseName=course;
  }
colorSet(){
  this.colorname=this.courseName;
}

}
