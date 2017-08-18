import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Injectable()
export class NavigationService {

  constructor(private router: Router) {
  }

  register(username: string): Promise<boolean> {
    return this.router.navigate(["register"], {queryParamsHandling: "merge", queryParams: {username: username}});
  }

  login(username: string): Promise<boolean> {
    return this.router.navigate(["login"], {queryParamsHandling: "merge", queryParams: {username: username}});
  }

  account(route: ActivatedRouteSnapshot): Promise<boolean> {
    return this.router.navigate(["account"], {queryParamsHandling: "merge", queryParams: route.queryParams, preserveFragment: true});
  }
}
