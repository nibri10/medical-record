import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  currentState$: Observable<any> | undefined;
  _medicinalRecords:any;

  constructor(public route: ActivatedRoute,private router: Router) {
    // @ts-ignore
    this._medicinalRecords = this.router.getCurrentNavigation().extras.state;
    console.log(this._medicinalRecords.medicinalRecords);
  }

  ngOnInit() {
    this.currentState$ = this.route.paramMap.pipe(
      map(() => window.history.state.medicinalRecords.queryParams)
    );

  }
}
