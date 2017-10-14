import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MatInputModule} from '@angular/material';
import {StringPipesModule} from '../../custom-pipes/string-pipes/string-pipes.module';
import {ConfirmPasswordDirective} from './confirm-password.directive';

@NgModule({
  imports: [
    SharedModule,
    MatInputModule,
    StringPipesModule
  ],
  declarations: [ConfirmPasswordDirective],
  exports: [ConfirmPasswordDirective]
})
export class ConfirmPasswordModule {
}
