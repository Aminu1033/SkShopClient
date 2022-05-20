import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ResponseError } from '../models/ResponseError';
import { UserDto } from '../models/userDto';
import { UserForCreationDto } from '../models/userForCreationDto';
import { BASE_URL } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private header = new HttpHeaders(
    {
      "Content-Type": "Application/json",
      "Accept": "Application/json"
    });

  constructor(@Inject(BASE_URL) private base_url: string, private router: Router,
    private http: HttpClient) { }

  // Getting the users from the server
  getUsers(): Observable<UserDto[] | any> {
    return this.http.get<UserDto[]>(`${this.base_url}api/users`)
      .pipe(
        catchError((err) => of(this.handleHttpError(err)))
      );
  }

  // Getting a user from the server
  getUser(id: string): Observable<UserDto | any> {
    return this.http.get<UserDto>(`${this.base_url}api/users/{id}`)
      .pipe(
        catchError((err) => of(this.handleHttpError(err)))
      );
  }

  registerUser(user: UserForCreationDto): Observable<UserForCreationDto | any> {
    {
      return this.http.post<UserForCreationDto>(`${this.base_url}api/users`, user,
        {
          headers: this.header
        })
        .pipe(
          catchError((err) => of(this.handleHttpError(err)))
        );
    }
  }

  //Handling response errors
  handleHttpError(err: HttpErrorResponse) {
    let resultError = new ResponseError();
    resultError.friendlyMessage = "An error occur while retrieving data from: ";
    resultError.statusText = err.statusText;
    resultError.statusCode = err.status;
    resultError.error = err.error;
    resultError.url = err.url;

    // Navigating to error component
    this.router.navigate(['/error', {
      message: resultError.friendlyMessage,
      statusCode: resultError.statusCode,
      url: resultError.url,
      statusText: resultError.statusText
    }])
  }
}
