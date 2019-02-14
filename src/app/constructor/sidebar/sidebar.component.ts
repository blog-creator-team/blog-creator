import {Component, Input} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {SIDEBARS} from './const';
import {Observable} from 'rxjs';
import {SidebarRequest} from "../../models/sidebar-request";
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebar$: Observable<SidebarRequest>;
  sidebars = SIDEBARS;

  @Input() onElementSelect: ($event: string) => string;

  constructor(private sidebarService: SidebarService) {
    this.sidebar$ = this.sidebarService.sidebar$;
    console.log(this.sidebar$);
    //  вызвали подписку?
  }


}
