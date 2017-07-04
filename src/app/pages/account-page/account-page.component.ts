import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user/user.service";
import {User} from "../../model/user";
import {MdSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {NavigationService} from "../../core/navigation/navigation.service";

@Component({
  selector: 'idp-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountPageComponent implements OnInit {
  constructor(private userService: UserService, private snackBar: MdSnackBar, private navigationService: NavigationService) {
  }

  ngOnInit() {
  }

  onUserReady(user: User): void {
    // TODO implement this method
  }

  onUserNotFound(user: User): void {
    this.snackBar.open("Username not found, please register or go back.", undefined, {duration: 3000});
    this.navigationService.register(user.username).then((value: boolean) => {
    });
  }
}
