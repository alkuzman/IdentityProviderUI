/**
 * Created by AKuzmanoski on 06/08/2017.
 */
import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import {LoadingService} from "../loading/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO review this code to see if it is valid.
    this.loadingService.startLoading();
    return next.handle(req).do(event => {
    }, error => {
      this.loadingService.endLoading();
    }, () => {
      this.loadingService.endLoading();
    });
  }
}
