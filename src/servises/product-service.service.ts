import { Injectable } from '@angular/core';
import { Iproduct } from './../app/Shared-Classes-types/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  productList: Iproduct[] =
    [
      { ID: 1, Name: 'Iphone 12', Quantity: 10, Price: 15000, Img: '' },
      { ID: 2, Name: 'Iphone 11', Quantity: 15, Price: 11000, Img: '' },
      { ID: 3, Name: 'Lenovo Labtop', Quantity: 14, Price: 10000, Img: '' },
    ]

  getAllProducts() {
    return this.productList
  }

  GetProductById($id:number){
    if(this.productList[$id] == undefined){
      return null;
    }
    else{
      return this.productList[$id]
    }
    
  }
}
