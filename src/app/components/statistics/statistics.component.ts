import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, share, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  rxTime = new Date();
  intervalId: any;
  subscription!:  Subscription;
  constructor() { }

  ngOnInit(): void {
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
