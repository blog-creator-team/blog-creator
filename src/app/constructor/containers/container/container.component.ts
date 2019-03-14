import {Component, Input, OnInit} from '@angular/core';
import {Container} from "../container";
import {Element} from "../../../models/element";
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";
import {ELEMENT_DEFAULT_SETTINGS} from "../constants";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  elements: Array<Element>;
  element: Element;
  showButton = true;

  @Input() container: Container;

  constructor(public sidebarService: SidebarService) {
    this.elements = [];
  }

  ngOnInit() {
  }

  /*--------  open sidebar-elements  --------*/
  openElements() {
    this.showButton = false;
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENTS,
      this.onElementSelect.bind(this)
    );
  }

  onElementSelect(elementType) {
    this.elements.push(new Element({
      ...ELEMENT_DEFAULT_SETTINGS,
      kind: elementType,
      container_id: this.container.id
    }));
    this.sidebarService.openDefault();
  }

  /*--------------  Element Edit  --------------------*/
  elementEdit() {
  }
}
