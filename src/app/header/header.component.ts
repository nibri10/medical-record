import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationExtras, NavigationStart, Router} from "@angular/router";
import {filter, map, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title?: string ;
  @Input() singUp?: string;
  @Input() singIn?: string;

  apostate$: Observable<object> | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {

    // @ts-ignore
    this.apostate$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => {
        const currentState = this.router.getCurrentNavigation();
        // @ts-ignore
        return currentState.extras.state;
      })
    );
  }


  medicinalRecords() {

    let objToSend: NavigationExtras = {
      queryParams: {
        id: 1,
        medicinalName: 'Pondera 20mg',
        productCode: 'CM706',
        description: 'Pondera® (cloridrato de paroxetina) é um medicamento que tem como substância ativa o cloridrato de paroxetina. Esta substância pertence ao grupo de medicamentos conhecidos como inibidores seletivos da recaptação de serotonina (ISRS), classificados como antidepressivos.',
        prodRating: 4.9
      },
      skipLocationChange: false,
      fragment: 'top'
    };


    this.router.navigate(['/list'], {
      state: { medicinalRecords: objToSend }
    });
  }
}
