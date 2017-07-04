import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalCasePipe } from './capital-case/capital-case.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CapitalCasePipe],
  exports: [CapitalCasePipe]
})
export class StringPipesModule { }
