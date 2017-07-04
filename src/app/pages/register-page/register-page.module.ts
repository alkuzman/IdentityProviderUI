import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {RegisterPageRoutingModule} from "./register-page-routing.module";
import {RegisterPageComponent} from "./register-page.component";
import {RegistrationModule} from "../../contents/user/registration/registration.module";
import {CenterLayoutModule} from "../../custom-components/center-layout/center-layout.module";
import {MdCardModule} from "@angular/material";

@NgModule({
  imports: [
    RegisterPageRoutingModule,
    RegistrationModule,
    CenterLayoutModule,
    MdCardModule
  ],
  declarations: [RegisterPageComponent]
})
export class RegisterPageModule {
}
