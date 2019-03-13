import {Component, Input, OnInit} from '@angular/core';
import {Container} from "../container";
import {Element} from "../../../models/element";
import {ELEMENTS_TYPE} from "../../../models/elements-type";
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";
import {ElementSidebarRequest} from "../../../models/element-sidebar-request";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  elements: Array<object>;
  element: Element;
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

  onElementSelect(elementType) {
    this.elements.push(elementType);
    this.sidebarService.openDefault();
  }

  /*--------------  Element Edit  --------------------*/
  elementEdit(element) {

    this.sidebarService.sidebar = new ElementSidebarRequest(
      this.element = element
    )
    this. onTypeSelect.bind(this)
    console.log(33)
  }

  onTypeSelect(element) {
    this.element.kind = element.kind;
    console.log(22)
  }

}
