import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Util from "../../services/Util";
import {AuthService} from "../../services/AuthService";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  error = '';

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  getErrorMessageMail() {
    if (this.userForm.get("username")?.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.userForm.get("email")?.hasError("email")){
      return  'Not a valid email';
    }

    return "";

  }


  constructor(private authenticationService : AuthService,
              private route: ActivatedRoute,
               private router: Router,) {
    if(this.authenticationService.currentUserValue){
      this.router.navigate(["/dashboard"]);
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    this.authenticationService.login(this.userForm.get("username")?.value,this.userForm.get("password")?.value)
      .pipe(first())
      .subscribe({
        next:()=>{
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error:error => {
          this.error = error;
        }
      })
  }
}
