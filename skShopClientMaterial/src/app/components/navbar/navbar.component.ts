import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter();

  toggleValue: boolean = true; 
  
  constructor(public cartService: CartService) { }

  ngOnInit(): void { 
  }  
}
