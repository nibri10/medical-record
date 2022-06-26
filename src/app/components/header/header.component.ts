import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title?: string ;
  @Input() singUp?: string;
  @Input() singIn?: string;



  constructor(private authenticationService : AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }



  logout() {
    this.authenticationService.logout();

    return this.router.navigateByUrl('/');
  }
}
