import {Component, Output, EventEmitter} from '@angular/core';
import {ELEMENTS} from "../../../mocks/elements-mock";
import {SidebarService} from "../sidebar.service";

@Component({
  selector: 'app-sidebar-elements',
  templateUrl: './sidebar-elements.component.html',
  styleUrls: ['./sidebar-elements.component.scss']
})

export class SidebarElementsComponent {
  private elements = ELEMENTS;

  constructor(public sidebarService: SidebarService) {
    // this.selectedElements = [];
  }


  @Output() onElementSelect = new EventEmitter<string>();

  addElement(event, elementType): void {
    //service call to server
    // this.service.getElement(elementType).then(res => {this.onElementSelect.emit(res)})
    this.onElementSelect.emit(elementType);
  }


}
