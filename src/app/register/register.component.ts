import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostalCodeService} from "../services/postal-code.service";
import Util from "../services/Util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
  personId: new FormControl("", [Validators.required,Util.ValidaCpf]),
  email: new FormControl('', [Validators.required, Validators.email]),
  name: new FormControl("",[Validators.required]),
  lastName : new FormControl("",[Validators.required]),
  postalCode : new FormControl("",[Validators.required]),
  addressName : new FormControl("",[Validators.required]),
  addressNeighborhood : new FormControl("",[Validators.required]),
  addressNumber : new FormControl("",[Validators.required]),
  addressSupplement : new FormControl(""),
  addressState : new FormControl("",[Validators.required]),
  addressCity : new FormControl("",[Validators.required]),
  })

  getErrorMessagePersonId(){
    if(this.userForm.get("personId")?.hasError('required')){
      return "field is required";
    }
    if(this.userForm.get('personId')?.errors?.['cpfInvalid']){
      return "person id not is valid"
    }
    return ""
  }
  getErrorMessageMail() {
    if (this.userForm.get("email")?.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.userForm.get("email")?.hasError("email")){
      return  'Not a valid email';
    }

    return "";

  }

  constructor(public postalCodeService: PostalCodeService) { }

  ngOnInit(): void {
  }

  getAddressInfo(postalCode:string){
    if(!Util.isNullOrEmpty(postalCode) && Util.checkEqualInputLength(postalCode, 8)){
      this.postalCodeService.getAddressInfo(Util.cleanInt(postalCode)).subscribe((data) => {
       this.userForm.get("addressNeighborhood")?.setValue(data.bairro);
       this.userForm.get("addressName")?.setValue(data.logradouro);
       this.userForm.get("addressState")?.setValue(data.uf);
       this.userForm.get("addressCity")?.setValue(data.localidade);
       this.userForm.get("addressSupplement")?.setValue(data.complemento);
      });
    }
  }

  getErrorMessageLastName() {
    if(this.userForm.get("lastName")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMessageName() {
    if(this.userForm.get("name")?.hasError('required')){
      return "field is required"
    }
    return
  }

  getErrorMessageAddressState() {
    if(this.userForm.get("addressState")?.hasError('required')){
      return "field is required"
    }
    return ""
  }
}







