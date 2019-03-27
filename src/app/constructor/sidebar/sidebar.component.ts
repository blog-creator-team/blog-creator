import {Component, OnDestroy} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {SIDEBARS} from './const';
import {Subscription} from 'rxjs';
import {SidebarRequest} from '../../models/sidebar-request';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnDestroy {
  sidebars = SIDEBARS;
  request: SidebarRequest;
  private _sidebarChangeListener: Subscription;

  constructor(private sidebarService: SidebarService,
              private router: Router) {
    this._sidebarChangeListener = this.sidebarService.sidebar$
      .subscribe((request: SidebarRequest) => {
        this.request = request;
      });
  }

  goPreview() {
    this.router.navigate(['/posts/6/preview']);
  }

  ngOnDestroy(): void {
    this._sidebarChangeListener.unsubscribe();
  }
}
