import {Component, Injectable, OnInit} from '@angular/core';
import {SidebarService} from '../sidebar/sidebar.service';
import {SIDEBARS} from '../sidebar/const';

@Component({
  selector: 'app-page-constructor',
  templateUrl: './page-constructor.component.html',
  styleUrls: ['./page-constructor.component.scss']
})
export class PageConstructorComponent {
  sidebars = SIDEBARS;

  constructor(public sidebarService: SidebarService) {
  }

  showSidebar(event, sidebarType) {
    this.sidebarService.setSidebar(sidebarType);
  }
}
