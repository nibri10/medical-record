import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Util from "../services/Util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  getErrorMessageMail() {
    if (this.userForm.get("email")?.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.userForm.get("email")?.hasError("email")){
      return  'Not a valid email';
    }

    return "";

  }


  constructor() { }

  ngOnInit(): void {
  }

}
