import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {MedicinalRecordsCreateComponent} from "./components/medicinal-records/create/medicinal-records-create.component";
import {AuthGuard} from "./services/AuthGuard";
import {ViewComponent} from "./components/medicinal-records/view/view.component";
import {EditComponent} from "./components/medicinal-records/edit/edit.component";
import {HomeComponent} from "./components/home/home.component";
import {NotLoggedLayoutComponent} from "./shared/not-logged-layout.component";


const routes: Routes = [
  {path:"auth/login", component:LoginComponent},
  {path:"auth/register", component:RegisterComponent},
  {path:"dashboard", component:DashboardComponent, canActivate: [AuthGuard]},
  {path:"medicinal-record/create", component:MedicinalRecordsCreateComponent, canActivate: [AuthGuard]},
  {path: 'medicinal-record/:Id/view', component: ViewComponent, canActivate: [AuthGuard] },
  {path: 'medicinal-record/:Id/edit', component: EditComponent, canActivate: [AuthGuard]},
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
        component: LoginComponent
      },

      { path:"auth/register",
        component:RegisterComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
