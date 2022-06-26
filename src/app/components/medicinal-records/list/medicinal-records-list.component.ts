import {Component, OnInit} from '@angular/core';
import {MedicinalRecordService} from "../../../services/MedicinalRecordService";
import {MedicinalRecord} from "../../../models/MedicinalRecord";
import {first} from "rxjs";
import {civilStatus, gender} from "../create/medicinal-records-create.component";

@Component({
  selector: 'app-medicinal-records-list',
  templateUrl: './medicinal-records-list.component.html',
  styleUrls: ['./medicinal-records-list.component.scss']
})
export class MedicinalRecordsListComponent implements OnInit {

  records: MedicinalRecord[] | undefined;

  constructor(private medicinalRecordService: MedicinalRecordService) {
  }

  ngOnInit(): void {
    this.medicinalRecordService.getAll().pipe(first()).subscribe(value => {
      this.records = value.data;
    })
  }

  delete(record: MedicinalRecord) {
    if(record.id) {
      this.medicinalRecordService.delete(record.id).subscribe(res => {
        if (this.records) {
          this.records = this.records.filter(item => item.id !== record.id);
        }
      })
    }
  }

  getGender(record: MedicinalRecord): string {
    if (record.gender) {
      return gender.map(i => {
        return i.id === record.gender ? i.name : ""
      })[0];
    }
    return "";
  }

  getCivilStatus(record: MedicinalRecord): string {
    if (record.civilStatus) {
      return civilStatus.map(i => {
        return i.id === record.gender ? i.name : ""
      })[0].toString();
    }
    return "";
  }

}
