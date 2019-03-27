import {Component, Input, OnInit} from '@angular/core';
import {SidebarRequest} from "../../../models/sidebar-request";
import {ELEMENTS_TYPE} from "../../../models/elements-type";

@Component({
  selector: 'app-sidebar-elements',
  templateUrl: './sidebar-elements.component.html',
  styleUrls: ['./sidebar-elements.component.scss']
})
export class SidebarElementsComponent {
  public onSelect: Function;
  public elementsType = ELEMENTS_TYPE;

  @Input() set request({ onSubmit }: SidebarRequest) {
    this.onSelect = onSubmit;
  }
}
