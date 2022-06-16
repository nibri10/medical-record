import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User} from "../models/User";
import {BehaviorSubject, map, Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";

@Injectable({providedIn:'root'})
export class AuthService{
  private currentUserSubject: BehaviorSubject<User>;
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
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next("");
  }

  register(email: string, name: string, username: string, password: string) {
      return this.http.post<any>(environment.api+"auth/signup",{email,name,username,password});
  }
}