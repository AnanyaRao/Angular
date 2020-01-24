import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
password="";
errorMessage="";
cpassword ="";
secondMessage ="";
  constructor() { }

  ngOnInit() {
  }
  strength(){
    if(this.password.length>=1 && this.password.length <3){
      this.errorMessage="Password strength is weak";
    }
    else if(this.password.length>=3 && this.password.length <6){
      this.errorMessage="Password strength is okay";
    }
    else if(this.password.length>=6){
      this.errorMessage="Password strength is good";
    }
  }

  match(){
    if(this.password==this.cpassword){
      this.secondMessage ="Password matched";
    }else{
      this.secondMessage ="Password does not match";
    }
  }

}
