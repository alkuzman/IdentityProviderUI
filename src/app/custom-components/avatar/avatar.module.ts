import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {AvatarComponent} from './avatar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [AvatarComponent],
  exports: [AvatarComponent]
})
export class AvatarModule {
}
