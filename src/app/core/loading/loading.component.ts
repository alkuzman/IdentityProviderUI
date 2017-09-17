import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'idp-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('class')
  get themeClass() {
    return 'default-theme idp-root';
  }

}
