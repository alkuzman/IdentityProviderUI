import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {User} from "../../model/user";
import {NavigationService} from "../navigation/navigation.service";

@Injectable()
export class IsUsernamePresentGuard implements CanActivate {

  constructor(private navigation: NavigationService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const username: string = route.queryParamMap.get("username");
    if (username === null) {
      this.navigation.account(route);
      return false;
    }
    return true;
  }
}
