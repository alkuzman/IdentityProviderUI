import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../model/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'idp-login-fields',
  templateUrl: './login-fields.component.html',
  styleUrls: ['./login-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFieldsComponent implements OnInit {
  @Input('user') user: User;
  @Input('form') form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    const password: FormControl = this.formBuilder.control('', [Validators.required]);
    this.form.addControl('password', password);
  }

}
