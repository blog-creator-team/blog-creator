import {Injectable} from '@angular/core';
import {SidebarContainerComponent} from './sidebar-container/sidebar-container.component';
import {SidebarElementsComponent} from './sidebar-elements/sidebar-elements.component';
import {SidebarElementComponent} from './sidebar-element/sidebar-element.component';
import {SidebarDefaultComponent} from './sidebar-default/sidebar-default.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
      private SidebarType = [
        SidebarDefaultComponent,
        SidebarContainerComponent,
        SidebarElementsComponent,
        SidebarElementComponent
  ];

  // private activeSidebar = SIDEBARS.defaultSb;
  private activeSidebar = '';
  constructor() {  }

  getActiveSidebar() {
    return this.activeSidebar;
  }

  setActiveSidebar(sidebarType) {
    this.activeSidebar = sidebarType;
  }
}

