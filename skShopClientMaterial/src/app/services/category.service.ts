import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Category } from '../models/category';
import { CategoryDto } from '../models/categoryDto'; 
import { ErrorService } from './error.service';
import { BASE_URL } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private header = new HttpHeaders(
    {
      "Content-Type": "Application/json",
      "Accept": "Application/json"
    });
    
  constructor(@Inject(BASE_URL) private base_url: string, private router: Router,
      private http: HttpClient, private errorService: ErrorService) { }

  getCategories(): Observable<CategoryDto[] | any>{
    return this.http.get<CategoryDto[]>(`${this.base_url}api/categories`)
      .pipe(
        catchError((err) => of(this.errorService.handleHttpError(err)))
      );     

  }

   
  getCategory(id: string): Observable<CategoryDto | any> {
    {
      return this.http.get<CategoryDto>(`${this.base_url}api/categories/${id}`)
        .pipe(
          catchError((err) => of(this.errorService.handleHttpError(err)))
        );
    }
  }

  createCategory(category: Category): Observable<Category | any> {
    {
      return this.http.post<Category>(`${this.base_url}api/Categories`, category,
        {
          headers: this.header
        })
        .pipe(
          catchError((err) => of(this.errorService.handleHttpError(err)))
        );
    }
  }

  updateCategory(category: Category): Observable<void> {
    {
      return this.http.put<void>(`${this.base_url}api/Categories`, category,
        {
          headers: this.header
        })
        .pipe(
          catchError((err) => of(this.errorService.handleHttpError(err)))
        );
    }
  }

  deletecategory(id: string): Observable<void> {
    {
      return this.http.delete<void>(`${this.base_url}api/categories/${id}`)
        .pipe(
          catchError((err) => of(this.errorService.handleHttpError(err)))
        );
    }
  } 
}