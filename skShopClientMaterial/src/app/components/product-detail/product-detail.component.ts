import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from 'src/app/models/ProductDto';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  product = new ProductDto();  
  constructor(private _route: ActivatedRoute, public cartService: CartService ) { }

  ngOnInit(): void {
    this.product = this._route.snapshot.data["productResult"] as ProductDto;  
  } 
}
