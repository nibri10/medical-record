import { Component, OnInit } from '@angular/core';
import {MedicinalRecord} from "../../../models/MedicinalRecord";
import {MedicinalRecordService} from "../../../services/MedicinalRecordService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id: number | undefined;
  record: MedicinalRecord| undefined;

  constructor(private medicinalRecordService : MedicinalRecordService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['Id'];
   if(this.id) {
     this.medicinalRecordService.find(this.id).subscribe((data: MedicinalRecord) => {
       this.record = data;
     });
   }
  }
}
