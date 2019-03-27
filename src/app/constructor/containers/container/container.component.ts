import {Component, Input, OnInit} from '@angular/core';
import {Container} from "../../../models/container";
import {Element} from "../../../models/element";
import {SidebarRequest} from "../../../models/sidebar-request";
import {SIDEBARS} from "../../sidebar/const";
import {SidebarService} from "../../sidebar/sidebar.service";
import {ElementsService} from "./elements.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  elements: Array<Element>;
  element: Element;
  showButton = true;

  @Input() container: Container;


  constructor(public sidebarService: SidebarService,
              public elementsService: ElementsService) {
  }

  ngOnInit() {
    this.elements = this.container.elements;
    this.showButton = this.container.elements.length === 0;
  }

  /*--------  open sidebar-elements  --------*/
  openElements(position) {
    this.showButton = false;
    this.sidebarService.sidebar = new SidebarRequest(
      SIDEBARS.ELEMENTS,
      elementType => this.addElement(elementType, position)
    );
  }

  addElement(elementType, position) {
    this.elementsService
      .createElement(elementType, position, this.container.id).subscribe(response => {
      this.elements.splice(position, 0, response.element);
      this.sidebarService.openDefault();
      console.log(position)
    })
  }

  /*--------------  Element Edit  --------------------*/
  elementEdit(elementType) {
  }
}
