import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MedicinalRecordsListComponent } from './components/medicinal-records/list/medicinal-records-list.component';
import { ActionsComponent } from './components/actions/actions.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MedicinalRecordsCreateComponent } from './components/medicinal-records/create/medicinal-records-create.component'
import {BearToken} from "./services/BearToken";
import { ViewComponent } from './components/medicinal-records/view/view.component';
import { EditComponent } from './components/medicinal-records/edit/edit.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MedicinalRecordsListComponent,
    ActionsComponent,
    StatisticsComponent,
    MedicinalRecordsCreateComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:BearToken, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
