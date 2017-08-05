import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelephoneNumberComponent } from './telephone-number.component';
import {SharedModule} from "../../shared/shared.module";
import {MdIconModule, MdInputModule, MdSelectModule} from "@angular/material";

@NgModule({
  imports: [
    SharedModule,
    MdSelectModule,
    MdInputModule,
    MdIconModule
  ],
  declarations: [TelephoneNumberComponent],
  exports: [TelephoneNumberComponent]
})
export class TelephoneNumberModule { }
