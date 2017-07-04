import {NgModule} from "@angular/core";
import {CenterLayoutModule} from "./center-layout/center-layout.module";
import {AvatarModule} from "./avatar/avatar.module";
import {NamedAvatarModule} from "./named-avatar/named-avatar.module";
import {ColorModule} from "./color/color.module";
import {ConfirmPasswordModule} from "./confirm-password/confirm-password.module";
import { PasswordStrengthIndicatorModule } from './password-strength-indicator/password-strength-indicator.module';
import { TelephoneNumberModule } from './telephone-number/telephone-number.module';

@NgModule({
  imports: [],
  exports: [
    AvatarModule,
    CenterLayoutModule,
    NamedAvatarModule,
    ColorModule,
    ConfirmPasswordModule,
    PasswordStrengthIndicatorModule,
    TelephoneNumberModule
  ]
})
export class CustomComponentsModule {
}
