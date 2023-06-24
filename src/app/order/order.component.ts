import { Component, OnInit } from '@angular/core';
import { IProducts } from '../IProducts';
import { OrderService } from '../order.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  order : IProducts[] = [];
  total : number = 0;
  service : number = 0;
  sum : number = 0;

  checkoutForm = this.fb.group({
    fname: '',
    lname: '',
    address: '',
    zip: '',})


  constructor(private orderService : OrderService, private fb : FormBuilder){}

  onSubmit() {
      this.orderService.addFormData(this.checkoutForm.value);
        console.log(this.checkoutForm.value)
        window.alert('Your order has been submitted');
  }


ngOnInit(): void {
  this.order = this.orderService.getCart();
  this.total = this.orderService.calculateTotal();
  this.service = this.orderService.calculateService();
  this.sum = this.orderService.calculateSum();
}


}