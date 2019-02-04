import {Component, Injectable, OnInit} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {SIDEBARS} from './const';
import {of} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent {
  sidebar$ = of();
  sidebars = SIDEBARS;

  constructor(private sidebarService: SidebarService) {
    this.sidebar$ = this.sidebarService.sidebar$;
  }
}
