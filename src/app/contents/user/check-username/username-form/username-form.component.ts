import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {User} from "../../../../model/user";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MdSnackBar} from "@angular/material";
import {FormUtilsService} from "../../../../core/form-utils/form-utils.service";

@Component({
  selector: 'idp-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsernameFormComponent implements OnInit {
  @Input("user") user: User;
  @Output("emailSubmitted") emailSubmitted: EventEmitter<User> = new EventEmitter<User>();
  form: FormGroup;
  fields: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MdSnackBar) {
    this.fields = this.fb.group({});
    this.form = this.fb.group({
      fields: this.fields
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.emailSubmitted.emit(this.user);
    } else {
      FormUtilsService.validate(this.form);
      this.snackBar.open("Please enter valid email", undefined, {duration: 3000});
    }
  }
}
