import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpUtils} from "./http-utils/http-utils.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpUtils]
})
export class CoreModule { }
