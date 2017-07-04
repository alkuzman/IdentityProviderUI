import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from "@angular/core";
import {User} from "../../../../model/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {GenderService} from "../../../../core/helper/gender/gender.service";
import {Gender} from "../../../../model/gender.enum";
import {Country} from "../../../../model/country";
import {Subscription} from "rxjs/Subscription";
import {animate, style, transition, trigger} from "@angular/animations";
import {LocationService} from "../../../../core/location/location.service";

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
export class RegistrationFieldsComponent implements OnInit, OnDestroy {
  @Input("user") user: User;
  @Input("form") form: FormGroup;
  confirmPasswordFields: FormGroup;
  countries: any[] = [];
  location: any;

  // Subscriptions
  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, public genderService: GenderService,
              public locationService: LocationService, private c: ChangeDetectorRef) {
  }

  ngOnInit() {

    // First Name
    let control: FormControl = this.fb.control(this.user.firstName, [Validators.required]);
    let subscription: Subscription = control.valueChanges.subscribe((value: string) => {
      this.user.firstName = value;
    });
    this.subscriptions.push(subscription);
    this.form.addControl("firstName", control);

    // Last Name
    control = this.fb.control(this.user.lastName, [Validators.required]);
    subscription = control.valueChanges.subscribe((value: string) => {
      this.user.lastName = value;
    });
    this.subscriptions.push(subscription);
    this.form.addControl("lastName", control);

    this.confirmPasswordFields = this.fb.group({});
    this.form.addControl("confirmPasswordFields", this.confirmPasswordFields);

    // Birthday
    const birthday = this.fb.control(undefined, [Validators.required]);
    this.form.addControl("birthday", birthday);
    subscription = birthday.valueChanges.subscribe((value: Date) => {
      if (!birthday.errors) {
        this.user.birthday = value;
      }
    });
    this.subscriptions.push(subscription);

    // Gender
    control = this.fb.control(undefined, [Validators.required]);
    subscription = control.valueChanges.subscribe((value: Gender) => {
      this.user.gender = value;
    });
    this.form.addControl("gender", control);
    this.subscriptions.push(subscription);

    // Telephone
    control = this.fb.control(this.user.telephone, [Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]);
    subscription = control.valueChanges.subscribe((value: string) => {
      this.user.telephone = value;
    });
    this.form.addControl("telephone", control);
    this.subscriptions.push(subscription);

    // Country
    const control2 = this.fb.control(undefined, [Validators.required]);
    subscription = control2.valueChanges.subscribe((value: any) => {
      const country: Country = new Country();
      country.name = this.locationService.getCountryName(value);
      country.alpha2Code = value.alpha2Code;
      country.alpha3Code = value.alpha3Code;
      country.flag = value.flag;
      country.numericCode = value.numericCode;
      this.user.country = country;
    });
    this.form.addControl("country", control2);
    this.subscriptions.push(subscription);
    this.subscriptions.push(this.locationService.countries.subscribe(data => {
      if (data == null) {
        return;
      }
      this.countries = data;
    }));

    // Calling code
    const callingCode = this.fb.control(undefined, [Validators.required]);
    subscription = callingCode.valueChanges.subscribe((value: any) => {
    });
    this.form.addControl("callingCode", callingCode);
    this.subscriptions.push(subscription);
    this.subscriptions.push(this.locationService.countries.subscribe(data => {
      if (data == null) {
        return;
      }
      this.countries = data;
    }));

    this.subscriptions.push(this.locationService.location.subscribe((loc: any) => {
      if (loc == null) {
        return;
      }
      control2.setValue(loc);
      callingCode.setValue(loc.callingCodes[0]);
      this.location = loc;
    }));
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = [];
  }
}
