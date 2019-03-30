import {Component, Input, OnInit} from '@angular/core';
import {Element} from "../../../models/element";
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";
import {ElementSidebarRequest} from "../../../models/element-sidebar-request";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() element: Element;

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {}

  public edit(element){
    const request = new ElementSidebarRequest(element);
    request.onChange = this._onSettingsChange.bind(this);
    this.sidebarService.sidebar = request;
  }

  _onSettingsChange(){

    this.sidebarService.openDefault();
  }
}
