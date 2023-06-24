import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
cart : IProducts [] = [];
formdata: any = {};

  constructor() { }

  addToCart(obj: IProducts){
this.cart.push(obj);
  }

  getCart(){
    return this.cart;
  }

  clearCart(){
    this.cart = [];
    return this.cart;
  }

calculateTotal(){
  let total = 0;
  for(let x of this.cart){
total = total + x.price;
  }
  return total;
}
calculateService(){
  let service = 0;
  if(this.calculateTotal() <= 40){
  service = this.calculateTotal() / 100;}
  return service
}

calculateDiscount(){
  let discount = 0;
  if(this.calculateTotal() > 40){
    discount = this.calculateTotal() * 0.85;
}
return discount;
}

calculateSum(){
  let sum = 0;
  if(this.calculateTotal() > 40){
    sum = this.calculateDiscount();
  } else(sum = this.calculateTotal() + this.calculateService())

return sum;
  }
  
  addFormData(formData: any){
    this.formdata = formData;
  }
  getFormData(){
    return this.formdata;
  }
}

