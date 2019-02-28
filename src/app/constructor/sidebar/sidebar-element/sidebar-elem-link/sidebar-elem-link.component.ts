import {Component, Input, OnInit} from '@angular/core';
import {Elements} from "../../../../models/elements";
import {SidebarRequest} from "../../../../models/sidebar-request";

@Component({
  selector: 'app-sidebar-elem-link',
  templateUrl: './sidebar-elem-link.component.html',
  styleUrls: ['./sidebar-elem-link.component.scss']
})
export class SidebarElemLinkComponent implements OnInit {
  public elements = Elements;
  public onSelect: Function;

  @Input() set request({ onSubmit }: SidebarRequest) {
    this.onSelect = onSubmit;
  }
  constructor() { }

  ngOnInit() {
  }

}
