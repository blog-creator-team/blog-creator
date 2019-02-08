import {Component, Injectable, OnInit} from '@angular/core';
import {SidebarService} from '../sidebar/sidebar.service';
import {SIDEBARS} from '../sidebar/const';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent {
  sidebars = SIDEBARS;

  constructor(public sidebarService: SidebarService) {
  }

  showSidebar(event, sidebarType) {
    this.sidebarService.sidebar = sidebarType;
  }
}
