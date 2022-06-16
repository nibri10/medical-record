import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MedicinalRecord} from "../models/MedicinalRecord";
import {environment} from "../../environments/environment.prod";
import {Injectable} from "@angular/core";
import {catchError, Observable, retry, throwError} from "rxjs";

export interface IResponse{
  success:boolean,
  data:MedicinalRecord[],
  message:string
}
@Injectable({
  providedIn: 'root'
})
export class MedicinalRecordService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-type":"application/json"
    })
  }

  getAll(){
    return this.http.get<IResponse>(`${environment.api}medicinalRecord/all`);
  }

  find(id:number): Observable<any> {
    return this.http.get(environment.api + 'medicinalRecord/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id:number):Observable<any>{
    return this.http.delete(environment.api + "medicinalRecord/delete/" + id).pipe(retry(1), catchError(this.errorHandler))
  }

  create(medicinalRecord:MedicinalRecord): Observable<MedicinalRecord> {
    return this.http.post<MedicinalRecord>(environment.api + 'medicinalRecord/create', JSON.stringify(medicinalRecord),this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandler))
  }

  update(id:number, medicinalRecord:MedicinalRecord): Observable<any> {
    return this.http.put(environment.api + 'medicinalRecord/update/' + id, JSON.stringify(medicinalRecord),this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandler))
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
