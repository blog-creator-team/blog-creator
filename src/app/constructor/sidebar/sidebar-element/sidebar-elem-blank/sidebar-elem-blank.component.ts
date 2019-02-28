import {Component, Input, OnInit} from '@angular/core';
import {Elements} from "../../../../models/elements";
import {SidebarRequest} from "../../../../models/sidebar-request";

@Component({
  selector: 'app-sidebar-elem-blank',
  templateUrl: './sidebar-elem-blank.component.html',
  styleUrls: ['./sidebar-elem-blank.component.scss']
})
export class SidebarElemBlankComponent implements OnInit {
  public elements = Elements;
  public onSelect: Function;

  @Input() set request({ onSubmit }: SidebarRequest) {
    this.onSelect = onSubmit;
  }
  constructor() { }

  ngOnInit() {
  }

}
