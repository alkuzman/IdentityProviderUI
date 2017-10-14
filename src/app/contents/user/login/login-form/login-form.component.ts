import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../model/user';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'idp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  @Input('user') user: User;
  @Output('userReady') userReady: EventEmitter<User> = new EventEmitter();
  public form: FormGroup;
  public fields: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.fields = this.formBuilder.group({});
    this.form = this.formBuilder.group({
      fields: this.fields
    });
  }

  onSubmit(): void {

  }
}
