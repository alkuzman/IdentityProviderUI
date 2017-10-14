import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordStrengthIndicatorComponent} from './password-strength-indicator.component';
import {MatProgressBarModule, MatTooltipModule} from '@angular/material';
import {PasswordStrengthService} from './password-strength.service';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  declarations: [PasswordStrengthIndicatorComponent],
  exports: [PasswordStrengthIndicatorComponent],
  providers: [PasswordStrengthService]
})
export class PasswordStrengthIndicatorModule {
}
