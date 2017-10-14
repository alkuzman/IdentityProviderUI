import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CenterLayoutComponent} from './center-layout.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CenterLayoutComponent],
  exports: [CenterLayoutComponent]
})
export class CenterLayoutModule {
}
