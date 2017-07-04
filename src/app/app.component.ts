import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'idp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @HostBinding('class') get themeClass() {
    return 'default-theme idp-root';
  }

  constructor() {
  }
}
