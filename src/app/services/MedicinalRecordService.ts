import {HttpClient} from "@angular/common/http";
import {MedicinalRecord} from "../models/MedicinalRecord";
import {environment} from "../../environments/environment.prod";
import {Injectable} from "@angular/core";

export interface IResponse{
  success:boolean,
  data:MedicinalRecord[],
  message:string
}
@Injectable({
  providedIn: 'root'
})
export class MedicinalRecordService {

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<IResponse>(`${environment.api}medicinalRecord/all`);
  }
}
