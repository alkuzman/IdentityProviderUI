import {NgModule} from "@angular/core";

import {AccountPageRoutingModule} from "./account-page-routing.module";
import {AccountPageComponent} from "./account-page.component";
import {SharedModule} from "../../shared/shared.module";
import {MdCardModule, MdProgressSpinnerModule, MdSnackBarModule} from "@angular/material";
import {CenterLayoutModule} from "../../custom-components/center-layout/center-layout.module";
import {AvatarModule} from "../../custom-components/avatar/avatar.module";
import {NamedAvatarModule} from "../../custom-components/named-avatar/named-avatar.module";
import {CheckUsernameModule} from "../../contents/user/check-username/check-username.module";

@NgModule({
  imports: [
    SharedModule,
    CenterLayoutModule,
    MdCardModule,
    CheckUsernameModule,
    AccountPageRoutingModule,
    MdSnackBarModule
  ],
  declarations: [AccountPageComponent]
})
export class AccountPageModule {
}
