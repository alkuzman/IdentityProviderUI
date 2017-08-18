import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {NavigationService} from "../navigation/navigation.service";

@Injectable()
export class IsAccountCheckedGuard implements CanActivate {
  public isChecked = false;

  constructor(private navigation: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isChecked) {
      this.isChecked = false;
      this.navigation.navigate(["account"], {queryParams: route.queryParams, skipLocationChange: true, queryParamsHandling: "merge"});
      return false;
    }
    return true;
  }
}
