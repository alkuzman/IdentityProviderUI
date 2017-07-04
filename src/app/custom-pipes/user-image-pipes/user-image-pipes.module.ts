import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileImagePipePipe } from './user-profile-image-pipe/user-profile-image-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserProfileImagePipePipe],
  exports: [UserProfileImagePipePipe]
})
export class UserImagePipesModule { }
