import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page.component";
import {LoginResolver} from "./login.resolver";
import {IsUsernamePresentGuard} from "../../core/guards/is-username-present.guard";
import {IsAccountCheckedGuard} from "../../core/guards/is-account-checked.guard";
import {User} from "../../model/user";


const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent,
    resolve: {
      user: LoginResolver
    },
    canActivate: [IsUsernamePresentGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [LoginResolver],
  exports: [RouterModule]
})
export class LoginPageRoutingModule {
}