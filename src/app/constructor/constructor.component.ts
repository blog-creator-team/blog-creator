import {Component} from '@angular/core';
import {SidebarService} from './sidebar/sidebar.service';
import {SIDEBARS} from './sidebar/const';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})

export class ConstructorComponent {
  sidebars = SIDEBARS;
  selectedElements: Array<string>;

  constructor(public sidebarService: SidebarService) {
    this.selectedElements = [];

  }

  showSidebar(event, sidebarType) {
    this.sidebarService.sidebar = sidebarType;
  }

  onElementSelect = (response: string) => {
    this.selectedElements.push(response)
  }
}

