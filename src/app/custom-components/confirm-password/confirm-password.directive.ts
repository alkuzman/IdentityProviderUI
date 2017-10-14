import {Directive, forwardRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {ConfirmPasswordValidators} from './confirm-password.validators';

export const CONFIRM_PASSWORD_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => ConfirmPasswordDirective),
  multi: true
};

@Directive({
  selector: '[appConfirmPassword][formControlName][type="password"],[appConfirmPassword][formControl][type="password"],' +
  '[appConfirmPassword][ngModel][type="password"]',
  providers: [CONFIRM_PASSWORD_VALIDATOR]
})
export class ConfirmPasswordDirective implements Validator,
  OnChanges {
  @Input() appConfirmPassword: AbstractControl;
  private _validator: ValidatorFn;
  private _onChange: () => void;

  constructor() {
  }


  validate(c: AbstractControl): ValidationErrors | any {
    return this.appConfirmPassword == null ? null : this._validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('confirmPassword' in changes) {
      this._createValidator();
      if (this._onChange) {
        this._onChange();
      }
    }
  }

  private _createValidator(): void {
    this._validator = ConfirmPasswordValidators.confirmPassword(this.appConfirmPassword);
  }
}
