import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userProfileImagePipe'
})
export class UserProfileImagePipePipe implements PipeTransform {

  transform(profilePicture: string, args?: any): any {
    return profilePicture && profilePicture !== "" ? profilePicture : "/assets/images/default-user.png";
  }

}
