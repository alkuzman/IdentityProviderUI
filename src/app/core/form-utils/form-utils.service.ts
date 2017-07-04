import {Injectable} from "@angular/core";
import {AbstractControl} from "@angular/forms";

@Injectable()
export class FormUtilsService {
  static validate(control: AbstractControl) {
    if (control.hasOwnProperty('controls')) {
      control.markAsTouched(true);
      const ctrl = <any>control;
      for (const inner of ctrl.controls) {
        FormUtilsService.validate(ctrl.controls[inner] as AbstractControl);
      }
    } else {
      control.markAsTouched(true);
    }
  }

  constructor() {
  }

}
