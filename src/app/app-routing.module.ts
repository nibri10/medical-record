import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {NotLoggedLayoutComponent} from "./shared/not-logged-layout.component";
import {ListComponent} from "./list/list.component";


const routes: Routes = [
  {
    path: "",
    component: NotLoggedLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent

      },
      {
        path: "auth/login",
        component: LoginComponent,
      },

      {
        path: "auth/register",
        component: RegisterComponent
      },
      {
        path: "list",
        component: ListComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
