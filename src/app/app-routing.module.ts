import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

const routes: Routes = [
  {
    path: "login",
    loadChildren: "app/pages/login-page/login-page.module#LoginPageModule",
    data: {animation: 'login', preload: true}
  },
  {
    path: "register",
    loadChildren: "app/pages/register-page/register-page.module#RegisterPageModule",
    data: {animation: 'register', preload: true}
  },
  {
    path: '',
    redirectTo: '/account',
    pathMatch: 'full',
    data: {animation: 'account'}
  },
  {
    path: '**', component: PageNotFoundComponent,
    data: {animation: 'pageNotFound'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: SelectivePreloadingStrategy
    }
  )],
  providers: [SelectivePreloadingStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
