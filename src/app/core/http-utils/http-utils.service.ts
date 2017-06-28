import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Response} from '@angular/http';

@Injectable()
export class HttpUtils {
  static extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  constructor(private router: Router) {

  }

  handleError(error: Response) {
    if (error.status === 404) {
      this.router.navigate(['/errors', 'page-not-found']).catch(onRejected => {
      });
      return null;
    } else {
      return Observable.throw(error);
    }
  }
}
