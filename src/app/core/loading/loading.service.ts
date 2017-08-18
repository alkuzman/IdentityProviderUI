import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Injectable()
export class LoadingService {
  private loading = false;
  private numberOfLoading = 0;
  private delay = 100;
  private _state: EventEmitter<boolean> = new EventEmitter(true);

  constructor() {
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
        this._state.emit(true);
      }
    });
  }

  endLoading(): void {
    this.numberOfLoading--;
    if (this.numberOfLoading === 0 && this.loading === true) {
      this.loading = false;
      this._state.emit(false);
    }
  }
}
