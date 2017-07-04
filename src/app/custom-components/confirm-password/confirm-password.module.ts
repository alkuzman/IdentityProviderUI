import {NgModule} from "@angular/core";
import {ConfirmPasswordComponent} from "./confirm-password.component";
import {SharedModule} from "../../shared/shared.module";
import {MdInputModule} from "@angular/material";
import {PasswordStrengthIndicatorModule} from "../password-strength-indicator/password-strength-indicator.module";
import {StringPipesModule} from "../../custom-pipes/string-pipes/string-pipes.module";

@NgModule({
  imports: [
    SharedModule,
    MdInputModule,
    PasswordStrengthIndicatorModule,
    StringPipesModule
  ],
  declarations: [ConfirmPasswordComponent],
  exports: [ConfirmPasswordComponent]
})
export class ConfirmPasswordModule {
}
