import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthIndicatorComponent } from './password-strength-indicator.component';
import {MdProgressBarModule, MdTooltipModule} from "@angular/material";
import {PasswordStrengthService} from "./password-strength.service";

@NgModule({
  imports: [
    CommonModule,
    MdProgressBarModule,
    MdTooltipModule
  ],
  declarations: [PasswordStrengthIndicatorComponent],
  exports: [PasswordStrengthIndicatorComponent],
  providers: [PasswordStrengthService]
})
export class PasswordStrengthIndicatorModule { }
