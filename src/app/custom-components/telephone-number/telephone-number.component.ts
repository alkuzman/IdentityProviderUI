import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LocationService} from "../../core/location/location.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-telephone-number',
  templateUrl: './telephone-number.component.html',
  styleUrls: ['./telephone-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TelephoneNumberComponent implements OnInit, OnDestroy {
  @Input("telephoneNumber") telephoneNumber: string;
  @Input("form") form: FormGroup;
  @Output("telephoneNumberReady") telephoneNumberReady: EventEmitter<string> = new EventEmitter();
  countries: any[];
  location: any;
  subscriptions: Subscription[] = [];

  constructor(public locationService: LocationService, private fb: FormBuilder) {
  }

  ngOnInit() {
    const callingCode: FormControl = this.fb.control(undefined);
    this.subscriptions.push(callingCode.valueChanges.subscribe((code: string) => {
    }));
    this.form.addControl("callingCode", callingCode);

    const telephoneNumber: FormControl = this.fb.control(this.telephoneNumber);
    this.subscriptions.push(telephoneNumber.valueChanges.subscribe((number: string) => {
      this.telephoneNumber = number;
      this.telephoneNumberReady.emit(this.telephoneNumber);
    }));
    this.form.addControl("telephoneNumber", telephoneNumber);

    this.locationService.countries.subscribe((data: any[]) => {
      if (data == null) {
        return;
      }
      this.countries = data;
    });

    this.locationService.location.subscribe((data: any) => {
      if (data == null) {
        return;
      }
      callingCode.setValue(data.callingCodes[0]);
      this.location = data;
    });
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = [];
  }
}
