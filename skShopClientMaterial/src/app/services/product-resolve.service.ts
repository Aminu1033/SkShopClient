import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable} from 'rxjs';
import { ProductDto } from '../models/ProductDto';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<HttpResponse<ProductDto[]>> { 


  constructor(private productService: ProductService) { 
    
  }
  resolve(): Observable<HttpResponse<ProductDto[]>> {
     return this.productService.getProducts();
  }
}
