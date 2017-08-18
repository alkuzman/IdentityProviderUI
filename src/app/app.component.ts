import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {LoadingService} from "./core/loading/loading.service";
import {Subscription} from "rxjs/Subscription";
import {transition, trigger, useAnimation} from "@angular/animations";
import {fadeIn, fadeOut} from "./core/animations/fade-animations";
import {routerAnimations} from "./routing.animations";
import {LocationService} from "./core/location/location.service";

@Component({
  selector: 'idp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    routerAnimations,
    trigger('progressAnimation', [
      transition(':enter',
        useAnimation(fadeIn)
      ),
      transition(':leave',
        useAnimation(fadeOut)
      )
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  public loading = false;
  private subscription: Subscription;

  constructor(public loadingService: LoadingService, private cd: ChangeDetectorRef, private locationService: LocationService) {

  }

  @HostBinding('class')
  get themeClass() {
    return 'default-theme idp-root';
  }

  ngOnInit(): void {
    this.subscription = this.loadingService.state.subscribe((loading: boolean) => {
      this.loading = loading;
      this.cd.markForCheck();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public prepareRouteTransition(outlet) {
    return outlet.activatedRouteData['animation'] || 'account';
  }
}
