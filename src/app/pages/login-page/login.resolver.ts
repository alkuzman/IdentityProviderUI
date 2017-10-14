import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../../services/user/user.service';
import {MatSnackBar} from '@angular/material';
import 'rxjs/add/operator/catch';
import {HttpErrorResponse} from '@angular/common/http';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

@Injectable()
export class LoginResolver implements Resolve<User> {

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    const username: string = route.queryParamMap.get('username');
    return this.userService.findByUsernameCached(username).catch((err: any, caught: any) => {
      if (err instanceof HttpErrorResponse && err.status === 404) {
        return this.onUserDoesntExist(route);
      }
      return Observable.throw(err);
    });
  }

  onUserDoesntExist(route: ActivatedRouteSnapshot): Observable<User> {
    this.snackBar.open('The username doesn\'t exist. Please register or', 'GO BACK', {duration: 10000})
      .onAction().subscribe(() => {
      this.router.navigate(['account']);
    });
    this.router.navigate(['register'], {queryParams: route.queryParams});
    return new EmptyObservable();
  }
}
