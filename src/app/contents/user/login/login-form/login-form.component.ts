import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../../model/user";

@Component({
  selector: 'idp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input("user") user: User;
  @Output("userReady") userReady: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
