import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-not-logged-layout',
  template: `
    <div>
      <app-header [singUp]="singUp" [singIn]="singIn" [title]="title"></app-header>
      <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class NotLoggedLayoutComponent {
  @ViewChild('sidenav') sidenav: any;
  singUp: any;
  singIn: any;
  title: any;
  toggleMenu = () => {
    this.sidenav.toggleMenu();
  }
  constructor() {
    this.singUp = "/auth/register"
    this.singIn = "/auth/login"
    this.title = "Medicinal Record"
  }
}


