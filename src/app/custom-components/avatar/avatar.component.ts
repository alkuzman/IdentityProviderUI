import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnInit {
  @HostBinding("class.app-avatar") appAvatarClass = true;
  @Input("src") src: String;

  constructor() {
  }

  ngOnInit() {
  }

}
