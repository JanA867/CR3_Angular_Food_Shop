import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../IProducts';
import { products } from '../products';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  product : IProducts = {} as IProducts;
  index: number = 0;

  constructor(private activatedRout : ActivatedRoute, private orderService: OrderService){}

  addToCart(){
    this.orderService.addToCart(this.product);
  };

  ngOnInit(): void {this.activatedRout.params.subscribe((params:any)=>{
    this.index = Number(params["id"]);
    this.product = products[this.index];
        })
      }

}
