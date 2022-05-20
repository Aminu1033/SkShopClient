import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseError } from '../models/ResponseError';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private router: Router) { }

  handleHttpError(err: HttpErrorResponse) {
    let resultError = new ResponseError();
    resultError.friendlyMessage = "An error occur while retrieving data from: ";
    resultError.statusText = err.statusText;
    resultError.statusCode = err.status;
    resultError.error = err.error;
    resultError.url = err.url;

    if (resultError.statusCode === 401) {
      this.router.navigate(['/login'])

    } else if (resultError.statusCode === 403) {
      this.router.navigate(['/access-denied']);

    } else {
      this.router.navigate(['/error', {
        message: resultError.friendlyMessage,
        statusCode: resultError.statusCode,
        url: resultError.url,
        statusText: resultError.statusText
      }]);
    }
  }
}
