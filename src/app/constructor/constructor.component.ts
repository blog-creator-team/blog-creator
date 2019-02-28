import {Component} from '@angular/core';
import {SidebarService} from './sidebar/sidebar.service';
import {SIDEBARS} from './sidebar/const';
import {SidebarRequest} from "../models/sidebar-request";
import {SIDEBAR_ELEMENT} from "./sidebar/sidebar-element/const-element";

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

  constructor(public sidebarService: SidebarService) {
    this.selectedElements = [];
  }

  showSidebar() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.CONTAINER,
      this.onElementSelect.bind(this)
    );
  }

  openElements() {
    this.onPressed = false;
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENTS,
      this.onElementSelect.bind(this)
    );
  }

  onElementSelect(elementType) {
    this.selectedElements.push(elementType);
    this.sidebarService.openDefault();
  }

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
}





