import {Component, OnDestroy, OnInit} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {SIDEBARS} from './const';
import {Subscription} from 'rxjs';
import {SidebarRequest} from "../../models/sidebar-request";
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnDestroy, OnInit {
  sidebars = SIDEBARS;
  request: SidebarRequest;
  currentPostId = 0;
  private _sidebarChangeListener: Subscription;


  constructor(
    private sidebarService: SidebarService,
    private activatedRoute: ActivatedRoute,
  ) {
    this._sidebarChangeListener = this.sidebarService.sidebar$
      .subscribe((request: SidebarRequest) => {
        this.request = request;
      });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => this.currentPostId = +params.get('id'));
  }

  ngOnDestroy(): void {
    this._sidebarChangeListener.unsubscribe();
  }

  get previewPath(): string {
    return `/posts/${this.currentPostId}/preview`;
  }
}
