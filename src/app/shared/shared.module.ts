import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
  ],
  declarations: [],
  exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, FlexLayoutModule]
})
export class SharedModule { }
