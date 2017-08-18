import {Injectable} from "@angular/core";
import {AbstractControl, FormGroup} from "@angular/forms";
import {Properties} from "../helper/properties";

@Injectable()
export class FormUtilsService {
  static validate(control: AbstractControl) {
    control.markAsTouched();
    control.updateValueAndValidity();
    if (control.hasOwnProperty('controls')) {
      const ctrl = <any>control;
      for (const inner in ctrl.controls) {
        if (inner != null) {
          FormUtilsService.validate(ctrl.controls[inner] as AbstractControl);
        }
      }
    }
  }

  static onValueChanged(form: FormGroup, formErrors: Properties) {
    if (!form) {
      return;
    }
    for (const field of Object.keys(formErrors)) {
      // clear previous error message (if any)
      formErrors[field] = '';
      const control = form.get(field);
      if (control && !control.valid) {
        for (const key of Object.keys(control.errors)) {
          formErrors[field] = key;
        }
      }
    }
  }

  constructor() {
  }
}
