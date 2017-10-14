import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterPageComponent} from './register-page.component';
import {IsUsernamePresentGuard} from '../../core/guards/is-username-present.guard';
import {RegistrationGuard} from './registration.guard';

const routes: Routes = [
  {
    path: '',
    component: RegisterPageComponent,
    canActivate: [IsUsernamePresentGuard, RegistrationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [RegistrationGuard],
  exports: [RouterModule]
})
export class RegisterPageRoutingModule {
}
