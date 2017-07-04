import {NgModule} from "@angular/core";
import {CheckUsernameFormComponent} from "./check-username-form/check-username-form.component";
import {SharedModule} from "../../../shared/shared.module";
import {MdButtonModule, MdInputModule, MdSnackBarModule} from "@angular/material";
import {UsernameFormComponent} from "./username-form/username-form.component";
import {ColorModule} from "../../../custom-components/color/color.module";
import { UsernameFieldsComponent } from './username-fields/username-fields.component';
import {NamedAvatarModule} from "../../../custom-components/named-avatar/named-avatar.module";
import {AvatarModule} from "../../../custom-components/avatar/avatar.module";
import {UserImagePipesModule} from "../../../custom-pipes/user-image-pipes/user-image-pipes.module";

@NgModule({
  imports: [
    SharedModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    ColorModule,
    AvatarModule,
    UserImagePipesModule,
    NamedAvatarModule,
  ],
  declarations: [CheckUsernameFormComponent, UsernameFormComponent, UsernameFieldsComponent],
  exports: [CheckUsernameFormComponent, UsernameFormComponent, UsernameFieldsComponent]
})
export class CheckUsernameModule {
}
