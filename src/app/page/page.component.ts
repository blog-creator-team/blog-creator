import {Component, Injectable, OnInit} from '@angular/core';
import {SidebarService} from '../sidebar/sidebar.service';
import {SIDEBARS} from '../sidebar/const';
import {of} from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  // sidebar_selection = '';
  sidebars = SIDEBARS;
  sidebar$ = of([]);
  // blocks = [];
  constructor(public sidebarService: SidebarService) {
  }

  ngOnInit() {
  }

  showSidebar(event, sidebarType) {
    this.sidebarService.setSidebar(sidebarType);
    this.sidebar$ = sidebarType;
  }

  // addLayoutBlock(e) {
  //   e.preventDefault();
  //   this.blocks.push(Math.random());
  // }
}
