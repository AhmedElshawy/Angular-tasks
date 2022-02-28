import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Shared-Classes-types/Category-interface';
import { discount } from '../Shared-Classes-types/Discount-enum';
import { Iproduct } from '../Shared-Classes-types/product-interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount:discount;
  storeName:string;
  storeLogo:string;
  productList:Iproduct[];
  categortList:Array<ICategory>;
  clientName:string;
  isPurchsed:boolean;

  //bool for showing the discount
  isActive:boolean = true;

  constructor() {
    this.Discount = discount.D1
    this.storeName= "h&m"
    this.storeLogo = "/assets/logo.png"
    this.productList=[
      {ID:1,Name:'Iphone 12', Quantity:10,Price:15000,Img:''},
      {ID:2,Name:'Iphone 11', Quantity:15,Price:11000,Img:''},
      {ID:3,Name:'Lenovo Labtop', Quantity:14,Price:10000,Img:''},

    ];
    this.categortList =
    [{ID:1,Name:'moblies'}
     , {ID:2,Name:'Cars'},
     {ID:3,Name:'computers'}
    ];
    this.clientName= ""
    this.isPurchsed = false
   }

   //check if there is a discount function
   checkDiscount(){
     if(this.Discount == 'no discount'){
      this.isActive = false;
     }
    
   }

   //purshasing function
   purshase(){
     if(this.isPurchsed == false){
      this.isPurchsed = true;
     }
     else{
      this.isPurchsed = false;
     }
     
   }
  
  ngOnInit(): void {
    this.checkDiscount();
  }

}
