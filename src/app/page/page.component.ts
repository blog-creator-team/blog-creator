import {Component, Injectable, OnInit} from '@angular/core';
import {SidebarService} from '../sidebar/sidebar.service';
import {SIDEBARS} from '../sidebar/const';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  sidebar_selection = '';
  sidebars = SIDEBARS;
  // blocks = [1, 2, 4];
  constructor(private sidebarService: SidebarService) { }
  // addLayoutBlock (e) {
  //   e.preventDefault();
  //   this.blocks.push(Math.random());
  // }
  ngOnInit() {
    this.sidebar_selection = this.sidebarService.getActiveSidebar();
  }
  showSidebar(event, sidebarType) {
    console.log(sidebarType);
    this.sidebarService.setActiveSidebar(sidebarType);
    this.sidebar_selection = sidebarType;
  }

}
