import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'idp-username-fields',
  templateUrl: './username-fields.component.html',
  styleUrls: ['./username-fields.component.scss'],
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
export class UsernameFieldsComponent implements OnInit {
  @Input("form") form: FormGroup;
  @Input("user") user: User;
  usernameControl: FormControl;
  usernameControlError = "required";

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.usernameControl = this.fb.control(this.user.username, [Validators.required, Validators.email]);
    this.usernameControl.valueChanges.subscribe((value: string) => {
      this.user.username = value;
    });
    this.form.addControl("username", this.usernameControl);
    this.usernameControl.valueChanges.subscribe((value: string) => {
      if (this.usernameControl.errors) {
        const errors = this.usernameControl.errors;
        if (errors.required) {
          this.usernameControlError = "required";
        } else if (errors.email) {
          this.usernameControlError = "email";
        } else {
          this.usernameControlError = undefined;
        }
      }
    });
  }

}
