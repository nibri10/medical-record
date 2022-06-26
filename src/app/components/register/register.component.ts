import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostalCodeService} from "../../services/postal-code.service";
import Util from "../../services/Util";
import {first} from "rxjs";
import {AuthService} from "../../services/AuthService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  name: new FormControl("",[Validators.required]),
  username: new FormControl("",[Validators.required]),
  password: new FormControl("",[Validators.required])

  })
  submitted = false;
  error = '';

  constructor(private authenticationService : AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  getErrorMessageName() {
    if(this.userForm.get("name")?.hasError('required')){
      return "field is required"
    }
    return
  }

  getErrorMessageMail() {
    if(this.userForm.get("email")?.hasError('required')){
      return "field is required"
    }
    return
  }

  getErrorUsername() {
    if(this.userForm.get("username")?.hasError('required')){
      return "field is required"
    }
    return
  }

  getErrorPassword() {
    if(this.userForm.get("username")?.hasError('required')){
      return "field is required"
    }
    return
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    this.authenticationService.register(this.userForm.get("email")?.value,this.userForm.get("name")?.value,this.userForm.get("username")?.value,this.userForm.get("password")?.value)
      .subscribe((data) => {
        this.router.navigateByUrl('/');
      });
  }

}







