import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../model/user';
import {Role} from '../../../../model/role.enum';

@Component({
  selector: 'idp-new-registration-form',
  templateUrl: './new-registration-form.component.html',
  styleUrls: ['./new-registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewRegistrationFormComponent implements OnInit {
  @Input('username') username: string;
  user: User;

  constructor() {
  }

  ngOnInit() {
    this.user = new User();
    this.user.username = this.username;
    this.user.email = this.username;
    this.user.role = Role.USER;
  }

  onSubmit(user: User): void {
  }
}
