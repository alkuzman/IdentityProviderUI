import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {User} from "../../../../model/user";
import {UserService} from "../../../../services/user/user.service";
import {Observable} from "rxjs/Observable";
import {Response} from "@angular/http";

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
  @Output("userNotFound") userNotFound: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = new User();
    if (this.username != null) {
      this.user.username = this.username;
      this.findUserByUsername(this.user);
    }
  }

  findUserByUsername(user: User) {
    this.user = user;
    const observable: Observable<User> = this.userService.findByUsername(this.user.username);
    observable.subscribe((storedUser: User) => this.onUserReady(storedUser), (error: Response) => this.onError(error));
  }

  onUserReady(user: User) {
    this.user = user;
    this.userReady.emit(user);
  }

  onError(error: Response): void {
    switch (error.status) {
      case 404:
        this.userNotFound.emit(this.user);
        break;
    }
  }
}
