import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {ServicesModule} from "./services/services.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AccountPageModule} from "./pages/account-page/account-page.module";
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {MdProgressBarModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    ServicesModule,
    MdProgressBarModule,
    BrowserAnimationsModule,
    AccountPageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
