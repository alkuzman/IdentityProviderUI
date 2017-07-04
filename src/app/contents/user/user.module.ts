import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckUsernameModule } from './check-username/check-username.module';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  imports: [],
  declarations: [],
  exports: [CheckUsernameModule, RegistrationModule]
})
export class UserModule { }
