import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './color.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ColorDirective],
  exports: [ColorDirective]
})
export class ColorModule { }
