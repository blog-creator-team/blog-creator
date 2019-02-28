import {Component, Input, OnInit} from '@angular/core';
import {Elements} from "../../../../models/elements";
import {SidebarRequest} from "../../../../models/sidebar-request";

@Component({
  selector: 'app-sidebar-elem-image',
  templateUrl: './sidebar-elem-image.component.html',
  styleUrls: ['./sidebar-elem-image.component.scss']
})
export class SidebarElemImageComponent implements OnInit {
  public elements = Elements;
  public onSelect: Function;

  @Input() set request({ onSubmit }: SidebarRequest) {
    this.onSelect = onSubmit;
  }
  constructor() { }

  ngOnInit() {
  }

}
