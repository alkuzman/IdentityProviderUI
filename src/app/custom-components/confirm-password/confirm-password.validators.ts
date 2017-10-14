import {AbstractControl, ValidationErrors} from '@angular/forms';

/**
 * Created by AKuzmanoski on 01/07/2017.
 */
export class ConfirmPasswordValidators {
  public static passwordMatcher(c: AbstractControl) {
    const parent = c.parent;
    if (!parent.get('password') || !c) {
      return null;
    }
    return parent.get('password').value === c.value ? null : {'passwordMatcher': true};
  }

  public static confirmPassword(passwordControl: AbstractControl) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (passwordControl == null || isEmptyInputValue(control.value) || isEmptyInputValue(passwordControl.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      // Controls with NaN values after parsing should be treated as not having a
      // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
      return control.value !== passwordControl.value ? {
        'confirmPassword': {
          'confirmPassword': control.value,
          'password': passwordControl.value
        }
      } : null;
    };
  }
}

function isEmptyInputValue(value: any): boolean {
  return value == null || value.length === 0;
}
