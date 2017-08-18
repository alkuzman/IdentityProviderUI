import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginPageRoutingModule} from './login-page-routing.module';
import {LoginPageComponent} from "./login-page.component";
import {CenterLayoutModule} from "../../custom-components/center-layout/center-layout.module";
import {MdCardModule} from "@angular/material";
import {LoginModule} from "../../contents/user/login/login.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    LoginPageRoutingModule,
    CenterLayoutModule,
    MdCardModule,
    LoginModule
  ],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {
}
