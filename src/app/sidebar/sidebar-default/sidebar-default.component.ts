import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-default',
  templateUrl: './sidebar-default.component.html',
  styleUrls: ['./sidebar-default.component.scss'],
  })
export class SidebarDefaultComponent implements OnInit {
  sidebarTitle = 'Settings page';
  constructor() { }

  ngOnInit() {
  }

}
