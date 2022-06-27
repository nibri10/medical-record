import { Component, OnInit } from '@angular/core';
import Util from "../services/Util";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostalCodeService} from "../services/postal-code.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  singUp = ""
  singIn = ""
  title = ""

  userForm = new FormGroup({
    postalCode : new FormControl("",[Validators.required]),
    addressName : new FormControl("",[Validators.required]),
    addressNeighborhood : new FormControl("",[Validators.required]),
    addressNumber : new FormControl("",[Validators.required]),
    addressSupplement : new FormControl(""),
    addressState : new FormControl("",[Validators.required]),
    addressCity : new FormControl("",[Validators.required]),
  })

  constructor(public postalCodeService: PostalCodeService) {
    this.singUp = "/auth/register"
    this.singIn = "/auth/login"
    this.title = "Medicinal Record"
  }

  ngOnInit(): void {

    console.log(this.title)
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
}
