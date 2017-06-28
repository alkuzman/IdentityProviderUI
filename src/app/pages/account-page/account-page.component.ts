import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user';

@Component({
  selector: 'idp-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountPageComponent implements OnInit {
  public userList: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userList = this.userService.findAll();
  }

  trackByUsers(index: number, hero: User): number { return hero.id; }
}
