import {NgModule} from '@angular/core';

import {RegisterPageRoutingModule} from './register-page-routing.module';
import {RegisterPageComponent} from './register-page.component';
import {RegistrationModule} from '../../contents/user/registration/registration.module';
import {CenterLayoutModule} from '../../custom-components/center-layout/center-layout.module';
import {MatCardModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RegisterPageRoutingModule,
    RegistrationModule,
    CenterLayoutModule,
    MatCardModule
  ],
  declarations: [RegisterPageComponent]
})
export class RegisterPageModule {
}
