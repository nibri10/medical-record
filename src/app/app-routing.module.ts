import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {MedicinalRecordsCreateComponent} from "./medicinal-records-create/medicinal-records-create.component";
import {AuthGuard} from "./services/AuthGuard";

const routes: Routes = [
  {path:"auth/login", component:LoginComponent},
  {path:"auth/register", component:RegisterComponent},
  {path:"dashboard", component:DashboardComponent, canActivate: [AuthGuard]},
  {path:"medicinal-record/create", component:MedicinalRecordsCreateComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
