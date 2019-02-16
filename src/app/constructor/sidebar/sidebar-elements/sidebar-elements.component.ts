import {Component, Input} from '@angular/core';
import {SidebarRequest} from "../../../models/sidebar-request";
import {Elements} from "../../../models/element";

@Component({
  selector: 'app-sidebar-elements',
  templateUrl: './sidebar-elements.component.html',
  styleUrls: ['./sidebar-elements.component.scss']
})
export class SidebarElementsComponent {
  public onSelect: Function;
  public elements = Elements;

  @Input() set request({ onSubmit }: SidebarRequest) {
    this.onSelect = onSubmit;
  }
}
