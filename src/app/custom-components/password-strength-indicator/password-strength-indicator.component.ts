import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {PasswordStrengthService} from './password-strength.service';
import {PasswordStrength} from './password-strength';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-password-strength-indicator',
  templateUrl: './password-strength-indicator.component.html',
  styleUrls: ['./password-strength-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('componentAnimation', [
      transition(':enter', [
        style({
          height: 0,
          transform: 'scale(0)'
        }),
        animate('158ms 0ms ease-out', style({height: '*', transform: 'scale(1)'}))
      ]),
      transition(':leave', [
        animate('150ms 0ms ease-in', style({height: 0, transform: 'scale(0)'}))
      ])
    ])
  ]
})
export class PasswordStrengthIndicatorComponent implements OnInit {
  passwordStrength: PasswordStrength;
  passwordStrengthProgress: number;
  passwordStrengthTheme: string;
  @Output('passwordStrengthChange') passwordStrengthChange: EventEmitter<PasswordStrength> = new EventEmitter(true);
  @HostBinding('@componentAnimation') componentAnimation = true;

  constructor(private passwordStrengthService: PasswordStrengthService) {
  }

  _password: string;

  @Input('password')
  set password(password: string) {
    this._password = password;
    if (this.passwordStrengthService) {
      this.passwordStrength = this.passwordStrengthService.calculate(password);
      this.setupForPasswordStrength();
    }
  }

  ngOnInit() {
    this.passwordStrength = this.passwordStrengthService.calculate(this._password);
    this.setupForPasswordStrength();
  }

  setupForPasswordStrength() {
    this.passwordStrengthChange.emit(this.passwordStrength);
    this.passwordStrengthProgress = (this.passwordStrength + 1) * 20;
    if (this.passwordStrength <= 1) {
      this.passwordStrengthTheme = 'error-theme';
    } else if (this.passwordStrength === 2) {
      this.passwordStrengthTheme = 'warning-theme';
    } else if (this.passwordStrength === 3) {
      this.passwordStrengthTheme = 'normal-theme';
    } else {
      this.passwordStrengthTheme = 'success-theme';
    }
  }
}
