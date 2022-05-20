import { Component, OnInit } from '@angular/core';
import { OrderDto } from 'src/app/models/orderDto';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: OrderDto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
