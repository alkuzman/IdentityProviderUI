import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit,
  Output
} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfirmPasswordValidators} from "./confirm-password.validators";
import {PasswordStrength} from "../password-strength-indicator/password-strength";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("passwordStrength", [
      transition(":enter", [
        style({
          height: 0,
          transform: "scale(0)"
        }),
        animate("158ms 0ms ease-out", style({height: "*", transform: "scale(1)"}))
      ]),
      transition(":leave", [
        animate("150ms 0ms ease-in", style({height: 0, transform: "scale(0)"}))
      ])
    ])
  ]
})
export class ConfirmPasswordComponent implements OnInit {
  @Input("password") password: string;
  @Input("form") form: FormGroup;
  @Output("passwordChanged") passwordChanged: EventEmitter<string> = new EventEmitter();
  passwordStrengthShow = false;
  passwordError = "required";
  confirmPasswordError = "required";
  passwordStrength: PasswordStrength = PasswordStrength.SHORT;

  constructor(private formBuilder: FormBuilder, private c: ChangeDetectorRef) {
  }

  ngOnInit() {
    const control: FormControl = this.formBuilder.control(this.password, [Validators.required, Validators.minLength(6)]);
    control.valueChanges.subscribe((value: string) => {
      this.password = value;
      this.passwordChanged.emit(this.password);
      if (control.errors) {
        if (control.errors.required) {
          this.passwordError = "required";
        } else if (control.errors.minlength) {
          this.passwordError = "minLength";
        } else {
          this.passwordError = "";
        }
      }
    });
    this.form.addControl("password", control);

    const control1 = this.formBuilder.control("");
    this.form.addControl("confirm", control1);
    control1.setValidators([Validators.required, ConfirmPasswordValidators.passwordMatcher]);
    control1.valueChanges.subscribe((value: string) => {
      if (control1.errors) {
        if (control1.errors.required) {
          this.confirmPasswordError = "required";
        } else if (control1.errors.passwordMatcher) {
          this.confirmPasswordError = "passwordMatcher";
        } else {
          this.confirmPasswordError = "";
        }
      }
    });
  }

  showPasswordStrength() {
    this.passwordStrengthShow = true;
  }

  hidePasswordStrength() {
    this.passwordStrengthShow = false;
  }

  onPasswordStrength(passwordStrength: PasswordStrength) {
    this.passwordStrength = passwordStrength;
  }

  passwordStrengthString(passwordStrength: PasswordStrength): string {
    return PasswordStrength[passwordStrength].toLowerCase();
  }
}
