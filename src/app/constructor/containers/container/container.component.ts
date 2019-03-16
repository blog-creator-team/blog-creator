import {Component, Input, OnInit} from '@angular/core';
import {Container} from "../../../models/container";
import {Element} from "../../../models/element";
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";
import {ElementBlank, ElementImage, ElementLink, ElementText} from "../../../models/elements-classes";
import {logger} from "codelyzer/util/logger";
import {CONTAINER_DEFAULT_SETTINGS} from "../../../models/default-settings";

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

  constructor(public sidebarService: SidebarService) {}

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
    const elementParams = {id: 0, container_id: this.container.id };
    let element;
    if (elementType === 'text') {
      element = new ElementText(elementParams);
    }
    else if (elementType === 'link') {
      element = new ElementLink(elementParams);
    }
    else if (elementType === 'image') {
      element = new ElementImage(elementParams);
    }
    else if (elementType === 'blank') {
      element = new ElementBlank(elementParams);
    }
    this.elements.push(element);
    console.log(CONTAINER_DEFAULT_SETTINGS)
    this.sidebarService.openDefault();
  }

  /*--------------  Element Edit  --------------------*/
  elementEdit(el) {
    console.log(el)
  }
}
