import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'

import {LoggedLayoutComponent} from "./shared/logged-layout.component";
import {NotLoggedLayoutComponent} from "./shared/not-logged-layout.component";
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoggedLayoutComponent,
    NotLoggedLayoutComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
