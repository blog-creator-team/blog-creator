import {Component, Input} from '@angular/core';
import {SidebarRequest} from "../../../models/sidebar-request";
import {ELEMENTS_TYPE} from '../../../models/elements-type';

@Component({
  selector: 'app-sidebar-element',
  templateUrl: './sidebar-element.component.html',
  styleUrls: ['./sidebar-element.component.scss']
})
export class SidebarElementComponent {
  public elements = ELEMENTS_TYPE;
  public onSelect: Function;

  @Input() set ({ onSubmit}: SidebarRequest) {
    this.onSelect = onSubmit;
  }
}
