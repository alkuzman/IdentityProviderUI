import {ApplicationRef, ComponentFactoryResolver, EventEmitter, Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {ComponentPortal, DomPortalHost} from '@angular/cdk/portal';
import {MdProgressBar} from '@angular/material';
import {LoadingComponent} from './loading.component';

@Injectable()
export class LoadingService {
  private loading = false;
  private numberOfLoading = 0;
  private delay = 100;
  private _state: EventEmitter<boolean> = new EventEmitter(true);

  // 1. Reference to our Portal.
  //    This is the portal we'll use to attach our LoadingSpinnerComponent.
  private loadingSpinnerPortal: ComponentPortal<LoadingComponent>;

  // 2. Reference to our Portal Host.
  //    We use DOMPortalHost as we'll be using document.body as our anchor.
  private bodyPortalHost: DomPortalHost;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {

    // 4. Create a Portal based on the LoadingSpinnerComponent
    this.loadingSpinnerPortal = new ComponentPortal(LoadingComponent);

    // 5. Create a PortalHost with document.body as its anchor element
    this.bodyPortalHost = new DomPortalHost(
      document.body,
      this.componentFactoryResolver,
      this.appRef,
      this.injector);
  }

  public get state(): Observable<boolean> {
    return this._state;
  }

  startLoading(): void {
    this.numberOfLoading++;
    const timer = TimerObservable.create(this.delay);
    timer.subscribe(t => {
      if (this.loading === false && this.numberOfLoading > 0) {
        this.loading = true;
        this.bodyPortalHost.attach(this.loadingSpinnerPortal);
        // this._state.emit(true);
      }
    });
  }

  endLoading(): void {
    this.numberOfLoading--;
    if (this.numberOfLoading === 0 && this.loading === true) {
      this.loading = false;
      this.bodyPortalHost.detach();
      // this._state.emit(false);
    }
  }
}
