import {NgModule} from '@angular/core';
import {LoginProcessingFormComponent} from './login-processing-form/login-processing-form.component';
import {SharedModule} from '../../../shared/shared.module';
import {LoginFormComponent} from './login-form/login-form.component';
import {ColorModule} from '../../../custom-components/color/color.module';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {LoginFieldsComponent} from './login-fields/login-fields.component';
import {AvatarModule} from '../../../custom-components/avatar/avatar.module';
import {NamedAvatarModule} from '../../../custom-components/named-avatar/named-avatar.module';
import {UserImagePipesModule} from '../../../custom-pipes/user-image-pipes/user-image-pipes.module';
import {FocusModule} from '../../../custom-components/focus/focus.module';


@NgModule({
  imports: [
    SharedModule,
    ColorModule,
    MatButtonModule,
    AvatarModule,
    NamedAvatarModule,
    UserImagePipesModule,
    MatInputModule,
    FocusModule
  ],
  declarations: [LoginProcessingFormComponent, LoginFormComponent, LoginFieldsComponent],
  exports: [LoginProcessingFormComponent, LoginFormComponent]
})
export class LoginModule {
}
