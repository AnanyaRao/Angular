import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sample:any = "Variable from home component";
    data ="Before Click"
    bt=true;
    condition: boolean;
    data1=""
    returnMsg=""
    showMsg=false
    servers = ["Server1","Server2","Server3"];
    myServer:string;
    temperature;
    //loggingservice = new ServiceService(); 
    //color;
  constructor(private loggingservice:ServiceService) { }

  ngOnInit() {
   // this.temperature = Math.random();
    if(Math.random()>0.5){
       this.temperature='hot'
    }else{
      this.temperature='cold'
    }
  }
  show(){
    this.showMsg = !this.showMsg;
  }

  addElement(){
    this.servers.push(this.myServer);
  }
  getColor(){
    if(this.temperature=='hot'){
      return 'red';
    }else{
      return 'blue';
    }
  }
  display(){
    this.data="After Click";
    this.bt=false;

    if(this.data1.length>=5){
      this.returnMsg="Letters greater than 5";
    }
    else{
      this.returnMsg="Letters lesser than 5";
    }
    return this.returnMsg;
  }
 getDetails(){
   console.log(this.loggingservice.getLogging());
 }
}
