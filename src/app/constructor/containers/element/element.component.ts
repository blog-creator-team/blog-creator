import {Component, Input, OnInit} from '@angular/core';
import {Element} from '../../../models/element';
import {SidebarService} from '../../sidebar/sidebar.service';
import {ElementSidebarRequest} from '../../../models/element-sidebar-request';
import {ElementsService} from '../../services/elements.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() element: Element;
  currentElement: Element;
  private element_type: string;

  constructor(
    private sidebarService: SidebarService,
    private elementsService: ElementsService
  ) {
    this.currentElement = this.element;
   }

  ngOnInit() {
  }

  public edit(element) {
    const request = new ElementSidebarRequest(element);
    request.onSubmit = this._onSubmit.bind(this);

      this.sidebarService.sidebar = request;
  }

  _onSubmit(element: any) {
    this.elementsService
      .updateElementText(element, this.element.id)
      .subscribe((response: any) => {
        this.element.attrs = {
          ...this.element.attrs,
          ...element,
          response
        };
      });
    this.sidebarService.openDefault();
  }
}

