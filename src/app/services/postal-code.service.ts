import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {PostalCode} from "../shared/postal-code";


@Injectable({
  providedIn: 'root'
})
export class PostalCodeService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-type":"application/json"
    })
  }

  getAddressInfo(postalCode:string):Observable<PostalCode>{
    return  this.http.get<PostalCode>(`https://viacep.com.br/ws/${postalCode}/json/`)
      .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}

