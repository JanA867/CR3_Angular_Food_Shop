import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { OrderService } from '../order.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css'],

})
export class MenueComponent implements OnInit{
  products:IProducts[] = products;
  product : IProducts = {} as IProducts;
  index: number = 0;
  // available: boolean = true;

 
 
  constructor(private activatedRout : ActivatedRoute, private orderService: OrderService) { 

  };


  addToCart(product: IProducts){
    this.orderService.addToCart(product)
  }; 

  ngOnInit(): void {
    this.activatedRout.params.subscribe((params:Params)=>{
    this.index = +params['id'];
    this.product = this.products[this.index];
    
      });
    }
}
