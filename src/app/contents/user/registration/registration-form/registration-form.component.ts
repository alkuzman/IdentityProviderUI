import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit,
  Output
} from "@angular/core";
import {MdSnackBar} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../../../model/user";
import {FormUtilsService} from "../../../../core/form-utils/form-utils.service";

@Component({
  selector: 'idp-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent implements OnInit {
  @Input("user") user: User;
  @Output("userSubmitted") userSubmitted: EventEmitter<User> = new EventEmitter();
  form: FormGroup;
  fields: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MdSnackBar, private c: ChangeDetectorRef) {
    this.fields = this.fb.group({});
    this.form = this.fb.group({
      fields: this.fields
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.user.name = this.user.firstName + " " + this.user.lastName;
      this.userSubmitted.emit(this.user);
    } else {
      FormUtilsService.validate(this.form);
      this.snackBar.open("Please enter valid data", undefined, {duration: 3000});
    }
  }
}
