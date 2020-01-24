import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Product} from './Product';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
totalPrice:number =0;
  SelectedLocation;
  @Input() set locationName(name){
    this.SelectedLocation=name;
  }

  productArr: Product[] =[
    new Product(100,"Mobile",1000,1),
    new Product(101,"Bag",500,1),
    new Product(102,"Shoe",1000,1),
    new Product(103,"Groceries",700,1),
    new Product(104,"Furniture",15000,1),
    new Product(105,"Laptop",35000,1)
  ]
  @Output() sendpriceEvent =new EventEmitter();
  sentPrice(){
    this.sendpriceEvent.emit(this.totalPrice);
  }
  constructor() { }
  
onQuantityChange(p){
  this.productArr[this.productArr.indexOf(p)].productQuantity =p.productQuantity;
  this.totalPrice =0;
  for(let i =0;i<this.productArr.length;i++){
    this.totalPrice =this.totalPrice+this.productArr[i].productQuantity * this.productArr[i].productPrice;
  }
  this.sentPrice();
}
deletedProduct(p){
  this.productArr.splice(this.productArr.indexOf(p),1);
  this.totalPrice = 0;
  for(let i =0;i<this.productArr.length;i++){
    this.totalPrice =this.totalPrice+this.productArr[i].productQuantity * this.productArr[i].productPrice;
  }

  this.sentPrice();
}


  
 

  ngOnInit() {
    for(let i=0;this.productArr.length;i++){
      this.totalPrice =this.totalPrice +this.productArr[i].productQuantity * this.productArr[i].productPrice;
    }
    this.sentPrice();
  }

}
