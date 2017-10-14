import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-named-avatar-description',
  templateUrl: './named-avatar-description.component.html',
  styleUrls: ['./named-avatar-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamedAvatarDescriptionComponent implements OnInit {
  @HostBinding('class.mat-caption') matCaptionClass = true;

  constructor() {
  }

  ngOnInit() {
  }

}
