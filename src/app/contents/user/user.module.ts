import {NgModule} from "@angular/core";
import {CheckUsernameModule} from "./check-username/check-username.module";
import {RegistrationModule} from "./registration/registration.module";
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [LoginModule],
  exports: [CheckUsernameModule, RegistrationModule]
})
export class UserModule {
}
