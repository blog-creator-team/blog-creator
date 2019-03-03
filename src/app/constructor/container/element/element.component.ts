import {Component, Input, OnInit} from '@angular/core';
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";
import {Container} from "../container";
import {ELEMENT_DATA_MOCK} from "./mock-element";
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
  containerId: number;

  constructor(public sidebarService: SidebarService) {
    this.selectedElements = []
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

  /*-----------------------------------------*/
  openElementEdit() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENT,
      this.onElementSelect.bind(this)
    );
  }
}
