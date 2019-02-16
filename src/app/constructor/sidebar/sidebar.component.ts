import {Component, OnDestroy} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {SIDEBARS} from './const';
import {Subscription} from 'rxjs';
import {SidebarRequest} from "../../models/sidebar-request";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnDestroy {
  sidebars = SIDEBARS;
  request: SidebarRequest;
  private _sidebarChangeListener: Subscription;

  constructor(private sidebarService: SidebarService) {
    this._sidebarChangeListener = this.sidebarService.sidebar$
      .subscribe((request: SidebarRequest)=> {
      this.request = request;
    });
  }

  ngOnDestroy(): void {
    this._sidebarChangeListener.unsubscribe();
  }
}
