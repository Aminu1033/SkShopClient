import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { GenerateToken } from '../models/generate-token';
import { UserForAuthDto } from '../models/userForAuthDto';
import { ErrorService } from './error.service';
import { BASE_URL } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private header = new HttpHeaders(
    {
      "Content-Type": "Application/json",
      "Accept": "Application/json"
    });
    
  constructor(@Inject(BASE_URL) private base_url: string, private errorService: ErrorService,
       private http: HttpClient) { }

  generateToken(authDto: UserForAuthDto): Observable<GenerateToken | any>{
    return this.http.post<GenerateToken>(`${this.base_url}api/users/generatetoken`, authDto, {
      headers: this.header
    }).pipe(
      catchError((err) => of(this.errorService.handleHttpError(err)))
    );
  }
}