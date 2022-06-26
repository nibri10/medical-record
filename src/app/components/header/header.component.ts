import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";
import {AuthGuard} from "../../services/AuthGuard";
import Util from "../../services/Util";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title?: string;
  @Input() singUp?: string;
  @Input() singIn?: string;
  showExit: boolean = false;
  showAction: boolean = false;


  constructor(private authenticationService: AuthService, public router: Router) {

  }

  ngOnInit(): void {
    this.verify();
  }

  verify(){
    this.showExit = !Util.isNullOrEmpty(this.authenticationService.currentUserValue);
    this.showAction = Util.isNullOrEmpty(this.authenticationService.currentUserValue);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.verify();
    this.router.navigateByUrl("/")
      .then(() => {
        window.location.reload();
      });
  }
}
