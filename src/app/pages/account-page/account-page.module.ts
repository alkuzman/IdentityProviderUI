import {NgModule} from '@angular/core';

import {AccountPageRoutingModule} from './account-page-routing.module';
import {AccountPageComponent} from './account-page.component';
import {SharedModule} from '../../shared/shared.module';
import {MatCardModule, MatSnackBarModule} from '@angular/material';
import {CenterLayoutModule} from '../../custom-components/center-layout/center-layout.module';
import {CheckUsernameModule} from '../../contents/user/check-username/check-username.module';

@NgModule({
  imports: [
    SharedModule,
    CenterLayoutModule,
    MatCardModule,
    CheckUsernameModule,
    AccountPageRoutingModule,
    MatSnackBarModule
  ],
  declarations: [AccountPageComponent]
})
export class AccountPageModule {
}
