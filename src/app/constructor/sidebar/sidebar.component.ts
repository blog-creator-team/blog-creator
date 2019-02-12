import {Component, Input} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {SIDEBARS} from './const';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebar$: Observable<SIDEBARS>;
  sidebars = SIDEBARS;

  @Input() onElementSelect: ($event: string) => string;

  constructor(private sidebarService: SidebarService) {
    this.sidebar$ = this.sidebarService.sidebar$;
  }
}
