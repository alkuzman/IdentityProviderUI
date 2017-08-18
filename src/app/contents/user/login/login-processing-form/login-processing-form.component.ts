import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../model/user";

@Component({
  selector: 'idp-login-processing-form',
  templateUrl: './login-processing-form.component.html',
  styleUrls: ['./login-processing-form.component.scss']
})
export class LoginProcessingFormComponent implements OnInit {
  @Input("user") user: User;

  constructor() { }

  ngOnInit() {
  }

}
