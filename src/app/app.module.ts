import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { AuthService } from './auth.service';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { ChangepassComponent } from './changepass/changepass.component';

import { AdminServiceService } from './admin-service.service';
import { DataListModule }  from 'primeng/primeng';
import { HttpModule } from '../../node_modules/@angular/http';
import { AdminpanelComponent } from "./adminpanel/adminpanel.component"


@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    LoggedinComponent,
    SignupComponent,
    ChangepassComponent,
    AdminpanelComponent
  ],
  imports: [

  BrowserModule,
    FormsModule,
    DataListModule,
    HttpClientModule ,
    HttpModule,
    RouterModule.forRoot([
      {
        path: "", 
        component: ControlComponent
      },
      {
        path: "loggedin", 
        component: LoggedinComponent,
        canActivate: [AuthService]
      },
      {
        path:"signup",
        component: SignupComponent
      },
      {
        path:"changepassword",
        component: ChangepassComponent,
        canActivate: [AuthService]
      },
      {
        path: "admin",
        component: AdminpanelComponent,
        canActivate: [AdminServiceService]
      }
    ])
  ],
  providers: [
    AuthService,
    AdminServiceService
  ],
  bootstrap: [AppComponent,AdminpanelComponent]
})
export class AppModule { }
