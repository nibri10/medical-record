import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Util from "../../../services/Util";
import {PostalCodeService} from "../../../services/postal-code.service";
import {MedicinalRecordService} from "../../../services/MedicinalRecordService";
import {Router} from "@angular/router";

export const civilStatus = [
  { id: 1, name: "Married" },
  { id: 2, name: "Single" },
  { id: 3, name: "Divorced" }
];

export const gender = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" }
];
@Component({
  selector: 'app-medicinal-records-create',
  templateUrl: './medicinal-records-create.component.html',
  styleUrls: ['./medicinal-records-create.component.scss']
})
export class MedicinalRecordsCreateComponent implements OnInit {

  medicinalForm = new FormGroup({
    name:new FormControl("",[Validators.required]),
    birthdate: new FormControl("",[Validators.required]),
    placeBirth: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required]),
    civilStatus: new FormControl(null,[Validators.required]),
    gender: new FormControl(null,[Validators.required]),
    cns: new FormControl("",[Validators.required]),
    provenance: new FormControl("",[Validators.required]),
    motherName:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    phoneSecondary:new FormControl("",[Validators.required]),
    professional:new FormControl("",[Validators.required]),
    postalCode : new FormControl("",[Validators.required]),
    addressName : new FormControl("",[Validators.required]),
    addressNeighborhood : new FormControl("",[Validators.required]),
    addressNumber : new FormControl("",[Validators.required]),
    addressSupplement : new FormControl(""),
    addressState : new FormControl("",[Validators.required]),
    addressCity : new FormControl("",[Validators.required]),
    addressCountry: new FormControl("",[Validators.required]),
    symptoms: new FormControl("",[Validators.required]),
    complaints: new FormControl("",[Validators.required])
  })

  constructor(public medicinalRecordService : MedicinalRecordService, public postalCodeService: PostalCodeService, private router: Router) { }

  ngOnInit(): void {
  }

  getAddressInfo(postalCode:string){
    if(!Util.isNullOrEmpty(postalCode) && Util.checkEqualInputLength(postalCode, 8)){
      this.postalCodeService.getAddressInfo(Util.cleanInt(postalCode)).subscribe((data) => {
        this.medicinalForm.get("addressNeighborhood")?.setValue(data.bairro);
        this.medicinalForm.get("addressName")?.setValue(data.logradouro);
        this.medicinalForm.get("addressState")?.setValue(data.uf);
        this.medicinalForm.get("addressCity")?.setValue(data.localidade);
        this.medicinalForm.get("addressSupplement")?.setValue(data.complemento);
      });
    }
  }

  gender = gender;
  civilStatus = civilStatus;

  getErrorName() {
    if(this.medicinalForm.get("birthdate")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorBirthdate() {
    if(this.medicinalForm.get("birthdate")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorPlaceBirth() {
    if(this.medicinalForm.get("placeBirth")?.hasError('required')){
      return "field is required"
    }
    return ""
  }


  getErrorAge() {
    if(this.medicinalForm.get("age")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorCivilStatus() {
    if(this.medicinalForm.get("civilStatus")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorGender() {
    if(this.medicinalForm.get("gender")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorCns() {
    if(this.medicinalForm.get("cns")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorProvenance() {
    if(this.medicinalForm.get("provenance")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMotherName() {
    if(this.medicinalForm.get("motherName")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMessagePhone() {
    if(this.medicinalForm.get("phone")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMessagePhoneSecondary() {
    if(this.medicinalForm.get("phoneSecondary")?.hasError('required')){
      return "field is required"
    }
    return ""
  }
  getErrorMessageProfessional() {
    if(this.medicinalForm.get("professional")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMessageAddressName() {
    if(this.medicinalForm.get("addressName")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMessageAddressCity() {
    if(this.medicinalForm.get("addressCity")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMessageAddressSupplement() {
    if(this.medicinalForm.get("addressSupplement")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMessageAddressNeighborhood() {
    if(this.medicinalForm.get("addressNeighborhood")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMessageAddressState() {
    if(this.medicinalForm.get("addressState")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  getErrorMessageAddressCountry() {
    if(this.medicinalForm.get("addressCountry")?.hasError('required')){
      return "field is required"
    }
    return ""
  }

  onSubmit(){
      console.log(this.medicinalForm.value);
      console.log(this.medicinalForm.valid);
      this.medicinalRecordService.create(this.medicinalForm.value).subscribe((data) => {
        this.router.navigateByUrl('/dashboard');
      });
  }

}
