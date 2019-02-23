import {Component} from '@angular/core';
import {SidebarService} from './sidebar/sidebar.service';
import {SIDEBARS} from './sidebar/const';
import {SidebarRequest} from "../models/sidebar-request";

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})

export class ConstructorComponent {
  sidebars = SIDEBARS;
  selectedElements: Array<string>;
  elements: Array<string> = [];

  constructor(public sidebarService: SidebarService) {
    this.selectedElements = [];
  }

  openElements() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENTS,
      this.onElementSelect.bind(this)
    );
  }
  onElementSelect(elementType) {
    this.selectedElements.push(elementType);
    this.sidebarService.openDefault();
  }

  showSidebar() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.CONTAINER,
      this.onElementSelect.bind(this)
    );
  }

  openElementEdit() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENT,
      this.onElementSelect.bind(this)
    );
  }

  // onSidebarElementSelect(response: string) {
  //   this.selectedElements.push(response);
  //   this.sidebarService.openDefault();
  // }
}

