import {NgModule} from '@angular/core';
import {NewRegistrationFormComponent} from './new-registration-form/new-registration-form.component';
import {SharedModule} from '../../../shared/shared.module';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {ColorModule} from '../../../custom-components/color/color.module';
import {RegistrationFieldsComponent} from './registration-fields/registration-fields.component';
import {NamedAvatarModule} from '../../../custom-components/named-avatar/named-avatar.module';
import {AvatarModule} from '../../../custom-components/avatar/avatar.module';
import {UserImagePipesModule} from '../../../custom-pipes/user-image-pipes/user-image-pipes.module';
import {ConfirmPasswordModule} from '../../../custom-components/confirm-password/confirm-password.module';
import {TelephoneNumberModule} from '../../../custom-components/telephone-number/telephone-number.module';
import {PasswordStrengthIndicatorModule} from '../../../custom-components/password-strength-indicator/password-strength-indicator.module';
import {FocusModule} from '../../../custom-components/focus/focus.module';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';


@NgModule({
  imports: [
    SharedModule,
    MatButtonModule,
    ColorModule,
    MatSnackBarModule,
    NamedAvatarModule,
    AvatarModule,
    UserImagePipesModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ConfirmPasswordModule,
    TelephoneNumberModule,
    PasswordStrengthIndicatorModule,
    MatIconModule,
    FocusModule
  ],
  declarations: [NewRegistrationFormComponent, RegistrationFormComponent, RegistrationFieldsComponent],
  exports: [NewRegistrationFormComponent, RegistrationFormComponent, RegistrationFieldsComponent]
})
export class RegistrationModule {
}
