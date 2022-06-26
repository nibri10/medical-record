import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User, UserRegister} from "../models/User";
import {BehaviorSubject, catchError, map, Observable, retry, throwError} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {MedicinalRecord} from "../models/MedicinalRecord";

@Injectable({providedIn:'root'})
export class AuthService{
  private currentUserSubject: BehaviorSubject<User>;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-type":"application/json"
    })
  }
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {

    const currentUser = localStorage.getItem('currentUser');
    // @ts-ignore
    this.currentUserSubject =  new BehaviorSubject<User>(JSON.parse(currentUser));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username:string,password:string){
    return this.http.post<any>(` ${environment.api}auth/signin`, {username,password})
      .pipe(map(user => {
        console.log(user);

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }




  logout() {
    // remove user from local storage to log user out
   return localStorage.removeItem('currentUser');
  }

  register(user: UserRegister):Observable<any> {
      return this.http.post<any>(environment.api+"auth/signup", JSON.stringify(user),this.httpOptions);
  }

  errorHandler(error:any) {
    let errorMessage = ''

    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
