import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {LoadingService} from "./core/loading/loading.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'idp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  public loading = false;
  private subscription: Subscription;

  constructor(public loadingService: LoadingService, private cd: ChangeDetectorRef) {

  }

  @HostBinding('class')
  get themeClass() {
    return 'default-theme idp-root';
  }

  ngOnInit(): void {
    this.subscription = this.loadingService.state.subscribe((loading: boolean) => {
      this.loading = loading;
      this.cd.detectChanges();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
