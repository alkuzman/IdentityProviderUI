import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterPageComponent} from "./register-page.component";
import {IsUsernamePresentGuard} from "../../core/guards/is-username-present.guard";
import {IsAccountCheckedGuard} from "../../core/guards/is-account-checked.guard";
import {RegistrationGuard} from "./registration.guard";
import {MdSnackBarModule} from "@angular/material";

const routes: Routes = [
  {
    path: "",
    component: RegisterPageComponent,
    canActivate: [IsUsernamePresentGuard, RegistrationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [RegistrationGuard],
  exports: [RouterModule]
})
export class RegisterPageRoutingModule { }
