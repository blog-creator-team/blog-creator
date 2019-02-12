import {Component, Output, EventEmitter} from '@angular/core';
import {ELEMENTS} from "../../../mocks/elements-mock";

@Component({
  selector: 'app-sidebar-elements',
  templateUrl: './sidebar-elements.component.html',
  styleUrls: ['./sidebar-elements.component.scss']
})

export class SidebarElementsComponent {
  public elements = ELEMENTS;

   @Output() onElementSelect = new EventEmitter<string>();

  addElement(event, elementType): void {

    this.onElementSelect.emit(elementType);
  }
}
