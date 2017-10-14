import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-named-avatar',
  templateUrl: './named-avatar.component.html',
  styleUrls: ['./named-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamedAvatarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
