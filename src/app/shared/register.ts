import {Validators} from "@angular/forms";
import Util from "../services/Util";

export interface Register {
  personId :string,
  email :string,
  name :string,
  lastName :string,
  postalCode :string,
  addressName :string,
  addressNeighborhood :string,
  addressNumber :string,
  addressSupplement :string,
  addressState :string,
  addressCity :string
}
