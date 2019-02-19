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
  // selectedSidebarElement: Array<string>;

  constructor(public sidebarService: SidebarService) {
    this.selectedElements = [];
    // this.selectedSidebarElement = [];
  }

  showSidebar() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.CONTAINER,
      this.onElementSelect.bind(this)
    );
  }

  openElements() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENTS,
      this.onElementSelect.bind(this)
    );
  }

  showSidebar1() {
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENT,
      this.onElementSelect.bind(this)
    );
  }

  onElementSelect(response: string) {
    this.selectedElements.push(response);
    this.sidebarService.openDefault();
  }

  onSidebarElementSelect(){

  }
}

