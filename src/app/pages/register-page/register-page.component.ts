import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'idp-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("ID - Registration");
    this.route.queryParams.subscribe(params => {
      this.username = params["username"];
    })
  }

}
