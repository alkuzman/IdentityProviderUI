import {AbstractControl} from "@angular/forms";
/**
 * Created by AKuzmanoski on 01/07/2017.
 */
export class ConfirmPasswordValidators {
  public static passwordMatcher(c: AbstractControl) {
    const parent = c.parent;
    if (!parent.get("password") || !c) {
      return null;
    }
    return parent.get("password").value === c.value ? null : {'passwordMatcher': true};
  }
}
