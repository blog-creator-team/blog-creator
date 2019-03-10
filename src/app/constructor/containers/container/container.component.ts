import {Component, Input, OnInit} from '@angular/core';
import {Container} from "../container";
import {Element} from "../../../models/element";
import {ELEMENTS_TYPE} from "../../../models/elements-type";
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  elements: Array<ELEMENTS_TYPE>;
  element: Element[]= [];
  // element: Element;
  onPressed = true;


  @Input() container: Container;

  constructor(public sidebarService: SidebarService) {
    this.elements = [];

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
    this.elements.push(elementKind);
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
