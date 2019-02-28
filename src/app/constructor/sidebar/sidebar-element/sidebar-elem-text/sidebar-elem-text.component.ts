import {Component, Input, OnInit} from '@angular/core';
import {Elements} from "../../../../models/elements";
import {SidebarRequest} from "../../../../models/sidebar-request";

@Component({
  selector: 'app-sidebar-elem-text',
  templateUrl: './sidebar-elem-text.component.html',
  styleUrls: ['./sidebar-elem-text.component.scss']
})
export class SidebarElemTextComponent implements OnInit {
  public elements = Elements;
  public onSelect: Function;

  @Input() set request({ onSubmit }: SidebarRequest) {
    this.onSelect = onSubmit;
  }
  constructor() { }

  ngOnInit() {
  }

}
