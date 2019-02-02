import {Component, Injectable, OnInit} from '@angular/core';
import {SidebarService} from '../sidebar/sidebar.service';
import {SIDEBARS} from '../sidebar/const';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  sidebars = SIDEBARS;

  constructor(public sidebarService: SidebarService) {
  }

  showSidebar(event, sidebarType) {
    this.sidebarService.setSidebar(sidebarType);
  }
}
