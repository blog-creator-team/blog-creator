import {Component, Input} from '@angular/core';
import {SIDEBAR_ELEMENT} from './const-element'
import {SidebarRequest} from "../../../models/sidebar-request";

@Component({
  selector: 'app-sidebar-element',
  templateUrl: './sidebar-element.component.html',
  styleUrls: ['./sidebar-element.component.scss']
})
export class SidebarElementComponent {
  public element = SIDEBAR_ELEMENT;
  public onSelect: Function;

  @Input() set request({ onSubmit }: SidebarRequest) {
    this.onSelect = onSubmit;
  }
}

