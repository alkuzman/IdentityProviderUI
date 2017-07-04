import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamedAvatarComponent } from './named-avatar/named-avatar.component';
import { NamedAvatarNameComponent } from './named-avatar-name/named-avatar-name.component';
import { NamedAvatarDescriptionComponent } from './named-avatar-description/named-avatar-description.component';
import { NamedAvatarImageDirective } from './named-avatar-image.directive';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [NamedAvatarComponent, NamedAvatarNameComponent, NamedAvatarDescriptionComponent, NamedAvatarImageDirective],
  exports: [NamedAvatarComponent, NamedAvatarNameComponent, NamedAvatarDescriptionComponent, NamedAvatarImageDirective]
})
export class NamedAvatarModule { }
