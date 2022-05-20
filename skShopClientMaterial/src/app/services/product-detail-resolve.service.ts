import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDto } from '../models/ProductDto';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolveService implements Resolve<ProductDto>{

  constructor(private productService: ProductService) { }

  resolve(_route: ActivatedRouteSnapshot): ProductDto | Observable<ProductDto> | Promise<ProductDto> {
    let id = _route.paramMap.get("id") as string;
    return this.productService.getProduct(id);
  }
}
