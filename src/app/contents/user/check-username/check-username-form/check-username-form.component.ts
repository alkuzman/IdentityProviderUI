import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {User} from "../../../../model/user";

@Component({
  selector: 'idp-check-username-form',
  templateUrl: './check-username-form.component.html',
  styleUrls: ['./check-username-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckUsernameFormComponent implements OnInit {
  @Input("username") username: string;
  user: User = new User();
  @Output("userReady") userReady: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit() {
    this.user = new User();
    if (this.username != null) {
      this.user.username = this.username;
    }
  }

  checkUser(user: User) {
    this.onUserReady(user);
  }

  onUserReady(user: User) {
    this.user = user;
    this.userReady.emit(user);
  }
}
