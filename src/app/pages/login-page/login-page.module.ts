import {NgModule} from '@angular/core';

import {LoginPageRoutingModule} from './login-page-routing.module';
import {LoginPageComponent} from './login-page.component';
import {CenterLayoutModule} from '../../custom-components/center-layout/center-layout.module';
import {MatCardModule} from '@angular/material';
import {LoginModule} from '../../contents/user/login/login.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LoginPageRoutingModule,
    CenterLayoutModule,
    MatCardModule,
    LoginModule
  ],
  declarations: [LoginPageComponent],
})
export class LoginPageModule {
}
