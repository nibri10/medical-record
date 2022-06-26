import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "./AuthService";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BearToken implements HttpInterceptor{
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.currentUserValue;
    const isLogged = currentUser  && currentUser.accessToken;
    const isApiUrl = req.url.startsWith(environment.api);
    if(isLogged && isApiUrl){
    req = req.clone({
      setHeaders:{
        Authorization:`Bearer ${currentUser.accessToken}`
      }
    })
    }
    return next.handle(req);
  }

}
