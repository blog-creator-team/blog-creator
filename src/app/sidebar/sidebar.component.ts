import {Component, Injectable, OnInit} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {SIDEBARS} from './const';

// export enum SidebarType {
//   DefaultSb,
//   ContainerSb,
//   ElementsSb,
//   ElementSb
// }

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {
  sidebar_selection = '';
  sidebars = SIDEBARS;

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
    // this.sidebar_selection = this.sidebarService.getActiveSidebar();
    this.sidebar_selection = this.sidebarService.getActiveSidebar();
  }

  showSidebar(event, sidebarType) {
    // console.log(sidebarType);
    this.sidebarService.setActiveSidebar(sidebarType);
     this.sidebar_selection = sidebarType;

  }
}

