import {Component, Input, OnInit} from '@angular/core';
import {Container} from "../../../models/container";
import {Element} from "../../../models/element";
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";
import {_getElementConstructor} from "../../../shared/helpers";

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
  }

  ngOnInit() {
    this.elements = this.container.elements;
    this.showButton = this.container.elements.length === 0;
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
    const ElementConstructor = _getElementConstructor(elementType);
    const element = new ElementConstructor({id: 0, container_id: this.container.id});
    this.elements.push(element);
    this.sidebarService.openDefault();
  }

  /*--------------  Element Edit  --------------------*/
  elementEdit(elementType) {
  }
}
