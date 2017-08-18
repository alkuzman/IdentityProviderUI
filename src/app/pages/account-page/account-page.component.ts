import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {User} from "../../model/user";
import {MdSnackBar} from "@angular/material";
import {NavigationService} from "../../core/navigation/navigation.service";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {IsAccountCheckedGuard} from "../../core/guards/is-account-checked.guard";

@Component({
  selector: 'idp-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountPageComponent implements OnInit {
  public username: string;

  constructor(private snackBar: MdSnackBar,
              private navigationService: NavigationService,
              private titleService: Title,
              private route: ActivatedRoute,
              private isAccountCheckedGuard: IsAccountCheckedGuard) {
  }

  ngOnInit() {
    this.titleService.setTitle("ID - Check Account");
    this.route.queryParamMap.subscribe((value: ParamMap) => {
      this.username = value.get("username");
    })
  }

  // Call this method when you want to continue
  onContinue(user: User): void {
    this.login(user);
  }

  /**
   * Redirect the user to login page
   * @param {User} user for which the login is requested
   */
  login(user: User): void {
    this.navigationService.login(user.username);
  }

  /**
   * Call this method to resolve the error thrown from redirect to login.
   * @param reason which is returned by the redirect to login
   * @param user for which login was requested
   */
  onLoginError(reason: any, user): void {
    if (reason instanceof HttpErrorResponse) {
      // The reason for this error is Http problem
      const error: HttpErrorResponse = reason as HttpErrorResponse;
      if (error.status === 404) {
        // User is not registered. Redirect him to register page;
        this.register(user);
      }
    }
  }

  /**
   * This method gives the user info that he will be redirected and it redirects him to registration page.
   * @param {User} user which contains the username.
   */
  register(user: User): void {
    // Tell the user why he would be redirected to register page
    this.snackBar.open("Username not found, please register or go back.", undefined, {duration: 3000});
    // Redirect the user to the register page
    this.navigationService.register(user.username).then((value: boolean) => {
    });
  }
}
