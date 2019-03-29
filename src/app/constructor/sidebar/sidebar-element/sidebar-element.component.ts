import {Component, Input} from '@angular/core';
import {ElementSidebarRequest} from "../../../models/element-sidebar-request";
import {Element} from "../../../models/element"
import {ELEMENTS_TYPE} from "../../../models/elements-type";

@Component({
  selector: 'app-sidebar-element',
  templateUrl: './sidebar-element.component.html',
  styleUrls: ['./sidebar-element.component.scss']
})
export class SidebarElementComponent {
  elementKind = ELEMENTS_TYPE;
  onSubmit: (kind: string) => void;
  onChange: (element: Element) => void;
  onCansel: () => void;
  element: Element;

  @Input() set request({onSubmit, onChange, onCansel}: ElementSidebarRequest) {
    this.onChange = onChange;
    this.onSubmit = onSubmit
  }
}
