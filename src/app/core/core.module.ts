import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpUtils} from './http-utils/http-utils.service';
import {FormUtilsService} from './form-utils/form-utils.service';
import {NavigationService} from './navigation/navigation.service';
import {GenderService} from './helper/gender/gender.service';
import {LocationService} from './location/location.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoadingInterceptor} from './http-interceptors/loading.interceptor';
import {LoadingService} from './loading/loading.service';
import {IsUsernamePresentGuard} from './guards/is-username-present.guard';
import {IsAccountCheckedGuard} from './guards/is-account-checked.guard';
import {MdProgressBarModule} from '@angular/material';
import {LoadingComponent} from './loading/loading.component';


@NgModule({
  imports: [
    CommonModule,
    MdProgressBarModule
  ],
  declarations: [LoadingComponent],
  providers: [HttpUtils, FormUtilsService, NavigationService, GenderService, LocationService, LoadingService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  }, IsUsernamePresentGuard, IsAccountCheckedGuard],
  entryComponents: [LoadingComponent]
})
export class CoreModule { }
