import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPageRoutingModule } from './account-page-routing.module';
import { AccountPageComponent } from './account-page.component';
import {SharedModule} from "../../shared/shared.module";
import {MdCardModule, MdProgressSpinnerModule} from "@angular/material";

@NgModule({
  imports: [
    SharedModule,
    MdProgressSpinnerModule,
    MdCardModule,
    AccountPageRoutingModule
  ],
  declarations: [AccountPageComponent]
})
export class AccountPageModule { }
