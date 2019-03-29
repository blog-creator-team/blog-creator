import {Component, Input, OnInit} from '@angular/core';
import {Element} from "../../../models/element";
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";

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
    // this.sidebarService.sidebar = new SidebarRequest(
    //   SIDEBARS.ELEMENT,
    //   this.onElementSelect.bind(this)
    // );
    const request = new SidebarRequest(SIDEBARS.ELEMENT);
    request.onChange = this._onSettingsChange.bind(this, element);
    this.sidebarService.sidebar = request;
  }

  _onSettingsChange(){}
  // onElementSelect(){
  //
  // }
}
