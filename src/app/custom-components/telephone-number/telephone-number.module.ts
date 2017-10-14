import {NgModule} from '@angular/core';
import {TelephoneNumberComponent} from './telephone-number.component';
import {SharedModule} from '../../shared/shared.module';
import {MatIconModule, MatInputModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [TelephoneNumberComponent],
  exports: [TelephoneNumberComponent]
})
export class TelephoneNumberModule {
}
