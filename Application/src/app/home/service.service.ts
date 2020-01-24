import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getLogging(){
    return "This is the value from service file";
  }
}
