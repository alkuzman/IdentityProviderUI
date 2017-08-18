import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit
} from "@angular/core";
import {User} from "../../../../model/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GenderService} from "../../../../core/helper/gender/gender.service";
import {Subscription} from "rxjs/Subscription";
import {animate, style, transition, trigger} from "@angular/animations";
import {LocationService} from "../../../../core/location/location.service";
import {ConfirmPasswordValidators} from "../../../../custom-components/confirm-password/confirm-password.validators";
import {PasswordStrength} from "../../../../custom-components/password-strength-indicator/password-strength";
import {PasswordStrengthService} from "../../../../custom-components/password-strength-indicator/password-strength.service";
import {RegistrationFieldsErrors} from "./registration-fields.errors";
import {FormUtilsService} from "../../../../core/form-utils/form-utils.service";
import {Country} from "../../../../core/location/country";

@Component({
  selector: 'idp-registration-fields',
  templateUrl: './registration-fields.component.html',
  styleUrls: ['./registration-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("heightAnimation", [
      transition(":enter", [
        style({
          height: 0,
          opacity: 0
        }),
        animate("158ms 0ms ease-out", style({height: "*", opacity: 1}))
      ]),
      transition(":leave", [
        animate("150ms 0ms ease-in", style({height: 0, opacity: 0}))
      ])
    ])
  ]
})
export class RegistrationFieldsComponent implements OnInit, OnDestroy, AfterViewChecked {
  @Input("user") user: User;
  @Input("form") form: FormGroup;
  currentForm: FormGroup;
  // Fields
  telephoneNumberFields: FormGroup;
  // Password
  passwordStrengthShow = false;
  passwordStrength: PasswordStrength = PasswordStrength.SHORT;
  // Birthday
  startDate = new Date(1990, 0, 1);
  // Subscriptions
  subscriptions: Subscription[] = [];
  // Errors
  formErrors: RegistrationFieldsErrors = {
    firstName: 'required',
    lastName: 'required',
    password: 'required',
    confirmPassword: 'required',
    gender: 'required',
    birthday: 'required',
    country: 'required',
    telephone: ''
  };

  constructor(private fb: FormBuilder,
              public genderService: GenderService,
              public locationService: LocationService,
              private c: ChangeDetectorRef,
              public passwordStrengthService: PasswordStrengthService) {
  }

  ngOnInit() {
    // First Name
    const firstName: FormControl = this.fb.control(this.user.firstName, [Validators.required]);
    this.form.addControl("firstName", firstName);

    // Last Name
    const lastName: FormControl = this.fb.control(this.user.lastName, [Validators.required]);
    this.form.addControl("lastName", lastName);

    // Password
    const password: FormControl = this.fb.control(this.user.password, [Validators.required, Validators.minLength(6)]);
    this.form.addControl("password", password);

    // Confirm Password
    const confirmPassword: FormControl = this.fb.control(undefined, [Validators.required,
      ConfirmPasswordValidators.confirmPassword(password)]);
    this.form.addControl("confirmPassword", confirmPassword);

    // Birthday
    const birthday = this.fb.control(undefined, [Validators.required]);
    this.form.addControl("birthday", birthday);

    // Gender
    const gender = this.fb.control(undefined, [Validators.required]);
    this.form.addControl("gender", gender);

    // Telephone
    this.telephoneNumberFields = this.fb.group({});
    this.form.addControl("telephoneNumberFields", this.telephoneNumberFields);

    // Country
    const countryControl = this.fb.control(undefined, [Validators.required]);
    this.form.addControl("country", countryControl);

    // Location Data
    this.subscriptions.push(this.locationService.location.subscribe((location: any) => {
      if (location == null) {
        return;
      }
      if (this.user.country) {
        return;
      }
      this.user.country = location.alpha3Code;
      this.c.detectChanges();
    }));
  }

  ngAfterViewChecked(): void {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.form) {
      return;
    }
    this.currentForm = this.form;
    if (this.currentForm) {
      this.subscriptions.push(this.currentForm.valueChanges
        .subscribe(data => FormUtilsService.onValueChanged(this.currentForm, this.formErrors)));
    }
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = [];
  }

  trackByFn(index, item: Country) {
    return item.alpha3Code
  }
}
