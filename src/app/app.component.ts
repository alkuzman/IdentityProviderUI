import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {routerAnimations} from './routing.animations';
import {LocationService} from './core/location/location.service';

@Component({
  selector: 'idp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    routerAnimations
  ]
})
export class AppComponent {
  constructor(private locationService: LocationService) {

  }

  @HostBinding('class')
  get themeClass() {
    return 'default-theme idp-root';
  }

  public prepareRouteTransition(outlet) {
    return outlet.activatedRouteData['animation'] || 'account';
  }
}
