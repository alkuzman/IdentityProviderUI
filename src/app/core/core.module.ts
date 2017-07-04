import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpUtils} from "./http-utils/http-utils.service";
import {FormUtilsService} from "./form-utils/form-utils.service";
import { NavigationService } from './navigation/navigation.service';
import {GenderService} from "./helper/gender/gender.service";
import { LocationService } from './location/location.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpUtils, FormUtilsService, NavigationService, GenderService, LocationService]
})
export class CoreModule { }
