import {Component, Input} from '@angular/core';
import {SidebarRequest} from "../../../models/sidebar-request";
import {Elements} from '../../../models/elements';

@Component({
  selector: 'app-sidebar-element',
  templateUrl: './sidebar-element.component.html',
  styleUrls: ['./sidebar-element.component.scss']
})
export class SidebarElementComponent {
  public elements = Elements;
  public onSelect: Function;

  @Input() set ({ onSubmit}: SidebarRequest) {
    this.onSelect = onSubmit;
  }
}

