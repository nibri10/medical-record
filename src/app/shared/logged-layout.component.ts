import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-logged-layout',
  template: `
    <div>
      <app-header [singUp]="singUp" [singIn]="singIn" [title]="title"></app-header>
      <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class LoggedLayoutComponent {
  @ViewChild('sidenav') sidenav: any;
  singUp: any;
  singIn: any;
  title: any;

  constructor() {
    this.singUp = "/auth/register"
    this.singIn = "/auth/login"
    this.title = "Medicinal Record"
  }
}







