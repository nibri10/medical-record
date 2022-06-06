import { Component, OnInit } from '@angular/core';
import {MedicinalRecordService} from "../../services/MedicinalRecordService";
import {MedicinalRecord} from "../../models/MedicinalRecord";
import {first} from "rxjs";

@Component({
  selector: 'app-medicinal-records-list',
  templateUrl: './medicinal-records-list.component.html',
  styleUrls: ['./medicinal-records-list.component.scss']
})
export class MedicinalRecordsListComponent implements OnInit {

  records: MedicinalRecord[] | undefined;

  constructor(private medicinalRecordService : MedicinalRecordService) { }

  ngOnInit(): void {
    this.medicinalRecordService.getAll().pipe(first()).subscribe(value => {
      this.records = value.data;
    })
  }

}
