import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ProductDto } from '../models/ProductDto';
import { Product } from '../models/product';
import { ResponseError } from '../models/ResponseError';
import { ErrorService } from './error.service';

export const BASE_URL = new InjectionToken("base_url");

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private header = new HttpHeaders(
    {
      "Content-Type": "Application/json",
      "Accept": "Application/json"
    });

  constructor(
    @Inject(BASE_URL) private base_url: string, private router: Router,
    private http: HttpClient, private errorService: ErrorService) { }

  getProducts(param?: HttpParams): Observable<HttpResponse<ProductDto[]> | any> {
    return this.http.get<ProductDto[]>(`${this.base_url}api/products`,
      {
        observe: "response",
        params: param
      })
      .pipe(
        catchError((err) => of(this.errorService.handleHttpError(err)))
      );

  }

  getProduct(id: string): Observable<ProductDto | any> {
    {
      return this.http.get<ProductDto>(`${this.base_url}api/products/${id}`)
        .pipe(
          catchError((err) => of(this.errorService.handleHttpError(err)))
        );
    }
  }

  createProduct(product: Product): Observable<Product | any> {
    {
      return this.http.post<Product>(`${this.base_url}api/products`, product,
        {
          headers: this.header
        })
        .pipe(
          catchError((err) => of(this.errorService.handleHttpError(err)))
        );
    }
  }

  updateProduct(product: Product): Observable<void> {
    {
      return this.http.put<void>(`${this.base_url}api/products`, product,
        {
          headers: this.header
        })
        .pipe(
          catchError((err) => of(this.errorService.handleHttpError(err)))
        );
    }
  }

  deleteProduct(id: string): Observable<void> {
    {
      return this.http.delete<void>(`${this.base_url}api/products/${id}`)
        .pipe(
          catchError((err) => of(this.errorService.handleHttpError(err)))
        );
    }
  }
}