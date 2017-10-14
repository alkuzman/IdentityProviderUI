import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-named-avatar-name',
  templateUrl: './named-avatar-name.component.html',
  styleUrls: ['./named-avatar-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamedAvatarNameComponent implements OnInit {
  @HostBinding('class.mat-body-strong') matCaptionClass = true;

  constructor() {
  }

  ngOnInit() {
  }

}
