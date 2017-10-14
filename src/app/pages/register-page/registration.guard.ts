/**
 * Created by AKuzmanoski on 13/08/2017.
 */
import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../../services/user/user.service';
import 'rxjs/add/operator/catch';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';


@Injectable()
export class RegistrationGuard implements CanActivate {

  constructor(private navigation: Router, private userService: UserService, private snackBar: MatSnackBar) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const username: string = route.queryParamMap.get('username');
    return this.userService.findByUsernameCached(username).map((user: User) => {
      return this.onUsernameExists(route);
    }).catch((err: any, caught: any) => {
      if (err instanceof HttpErrorResponse && err.status === 404) {
        return Observable.of(true);
      }
      return Observable.throw(err);
    });
  }

  onUsernameExists(route: ActivatedRouteSnapshot): boolean {
    this.snackBar.open('The username exists. Please login or', 'GO BACK', {duration: 10000})
      .onAction().subscribe(() => {
      // Give the user chance to go back and try another account
      this.navigation.navigate(['account'], {queryParams: route.queryParams});
    });
    // Go to login because user already exists
    this.navigation.navigate(['login'], {queryParams: route.queryParams});
    return false;
  }
}

