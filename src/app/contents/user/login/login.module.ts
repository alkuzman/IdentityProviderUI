import { NgModule } from '@angular/core';
import { LoginProcessingFormComponent } from './login-processing-form/login-processing-form.component';
import {SharedModule} from "../../../shared/shared.module";
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginProcessingFormComponent, LoginFormComponent],
  exports: [LoginProcessingFormComponent, LoginFormComponent]
})
export class LoginModule { }
