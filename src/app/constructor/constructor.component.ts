import {Component} from '@angular/core';
import {SidebarService} from './sidebar/sidebar.service';
import {SIDEBARS} from './sidebar/const';
import {SidebarRequest} from "../models/sidebar-request";
import {Container} from "./container/container";
import {CONTAINER_DEFAULT_SETTINGS} from "./container/constants";

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})

export class ConstructorComponent {
  sidebars = SIDEBARS;
  selectedElements: Array<string>;
  elements: Array<string> = [];
  onPressed = true;
  containers: Container[] = [];

  constructor(public sidebarService: SidebarService) {
    this.selectedElements = [];
  }

  /*----------    added containers    ----------*/
  addContainer(index: number, type: string) {
    const container = new Container(CONTAINER_DEFAULT_SETTINGS);

    if (index === this.containers.length) {
      this.containers.push(container);
    } else if (type === 'prepend') {
      const updatedData = [];
      this.containers.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          updatedData.push(container, item)
        } else {
          updatedData.push(item)
        }
      });
      this.containers = updatedData;
    } else if (type === 'append') {
      const updatedData = [];
      this.containers.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          updatedData.push(item, container)
        } else {
          updatedData.push(item)
        }
      });
      this.containers = updatedData;
    }
  }
  /*-------------------------------------------*/

  // showSidebar() {
  //   this.sidebarService.sidebar = new SidebarRequest(
  //     SIDEBARS.CONTAINER,
  //     this.onElementSelect.bind(this)
  //   );
  // }

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

  /*---------  open sidebar-element  --------*/
  openElementEdit() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENT,
      this.onElementSelect.bind(this)
    );
  }

  // onSbElSelect(sbElementType) {
  //   this.selectedSb.push(sbElementType);
  //   this.sidebarService.openDefault();
  // }
  /*------------------------------------------*/
}
