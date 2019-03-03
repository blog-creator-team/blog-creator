import {Component, Input, OnInit} from '@angular/core';
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";
import {Elements} from "../../../models/elements";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  selectedElements: Array<Elements>;
  elements: Elements[] = [];
  onPressed = true;

  constructor(public sidebarService: SidebarService) {
    this.selectedElements = [];
  }

  ngOnInit() {
  }

  /*--------  open sidebar-elements  --------*/
  openElements() {
    this.onPressed = false;
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENTS,
      this.onElementSelect.bind(this)
    );
  }

  onElementSelect(elementKind) {
    this.selectedElements.push(elementKind);
       this.sidebarService.openDefault();
  }

  /*--------------  Element Edit  --------------------*/
  openElementEdit() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENT,
      this.onElementSelect.bind(this)
    );
  }
}
