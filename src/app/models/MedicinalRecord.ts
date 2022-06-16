import {FormControl, Validators} from "@angular/forms";

export class MedicinalRecord{
  id?:number;
  name?:string;
  birthdate ?:string;
  placeBirth?:string;
  age?:string;
  civilStatus?:number;
  gender?:number;
  cns?:string;
  provenance?:string;
  motherName?:string;
  phone?:string;
  phoneSecondary?:string;
  professional?:string;
  postalCode ?:string;
  addressName ?:string;
  addressNeighborhood ?:string;
  addressNumber ?:string;
  addressSupplement ?:string;
  addressState ?:string;
  addressCity?:string;
  addressCountry?:string;
  symptoms?:string;
  complaints?:string;
}
