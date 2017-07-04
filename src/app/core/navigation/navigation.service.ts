import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {QueryParamsHandling} from "@angular/router/src/config";

@Injectable()
export class NavigationService {

  constructor(private router: Router) { }

  register(username: string): Promise<boolean> {
    return this.router.navigate(["register"], {queryParamsHandling: "merge", queryParams: {username: username}});
  }
}
