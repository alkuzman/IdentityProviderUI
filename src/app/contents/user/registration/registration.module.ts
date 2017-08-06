import {NgModule} from "@angular/core";
import {NewRegistrationFormComponent} from "./new-registration-form/new-registration-form.component";
import {SharedModule} from "../../../shared/shared.module";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {
  MdButtonModule,
  MdDatepickerModule,
  MdIconModule,
  MdInputModule,
  MdNativeDateModule,
  MdSelectModule,
  MdSnackBarModule
} from "@angular/material";
import {ColorModule} from "../../../custom-components/color/color.module";
import {RegistrationFieldsComponent} from "./registration-fields/registration-fields.component";
import {NamedAvatarModule} from "../../../custom-components/named-avatar/named-avatar.module";
import {AvatarModule} from "../../../custom-components/avatar/avatar.module";
import {UserImagePipesModule} from "../../../custom-pipes/user-image-pipes/user-image-pipes.module";
import {ConfirmPasswordModule} from "../../../custom-components/confirm-password/confirm-password.module";
import {TelephoneNumberModule} from "../../../custom-components/telephone-number/telephone-number.module";
import {PasswordStrengthIndicatorModule} from "../../../custom-components/password-strength-indicator/password-strength-indicator.module";
import {FocusModule} from "../../../custom-components/focus/focus.module";


@NgModule({
  imports: [
    SharedModule,
    MdButtonModule,
    ColorModule,
    MdSnackBarModule,
    NamedAvatarModule,
    AvatarModule,
    UserImagePipesModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    ConfirmPasswordModule,
    TelephoneNumberModule,
    PasswordStrengthIndicatorModule,
    MdIconModule,
    FocusModule
  ],
  declarations: [NewRegistrationFormComponent, RegistrationFormComponent, RegistrationFieldsComponent],
  exports: [NewRegistrationFormComponent, RegistrationFormComponent, RegistrationFieldsComponent]
})
export class RegistrationModule {
}
