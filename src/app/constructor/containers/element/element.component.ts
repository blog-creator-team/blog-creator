import {Component, Input, OnInit} from '@angular/core';
import {Element} from "../../../models/element";
import {SidebarService} from "../../sidebar/sidebar.service";
import {ElementSidebarRequest} from "../../../models/element-sidebar-request";
import {ElementsService} from "../../services/elements.service";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() element: Element;
  private elementId: number;

  constructor(
    private sidebarService: SidebarService,
    private elementsService: ElementsService
  ) {
  }

  ngOnInit() {
  }

  public edit(element) {
    const request = new ElementSidebarRequest(element);
    request.onChange = this._onAttrsChange.bind(this);
    request.onSubmit = this._onSubmit.bind(this);

      this.sidebarService.sidebar = request;
  }

  _onSubmit(element, elementId) {
    this.elementsService
      .updateElement(element, elementId)
      .subscribe(response => response);
    console.log(element)
  }

  _onAttrsChange(element) {
    // this.elementsService
    //   .updateElement(element, this.elementId)
    //   .subscribe(response => response);
    // this.sidebarService.openDefault();
  }
}

