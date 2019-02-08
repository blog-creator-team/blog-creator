import {Component, Injectable, OnInit} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {SIDEBARS} from './const';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent {
  sidebar$: Observable<SIDEBARS>;
  sidebars = SIDEBARS;

  constructor(private sidebarService: SidebarService) {
    this.sidebar$ = this.sidebarService.sidebar$;
  }
}
