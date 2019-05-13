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
  private _storedElement: Element;

  constructor(
    private sidebarService: SidebarService,
    private elementsService: ElementsService
  ) {
    this.currentElement = this.element;
  }

  ngOnInit() {
  }

  public edit(element) {
    this._storedElement = JSON.parse(JSON.stringify(this.element));
    const request = new ElementSidebarRequest(element);
    request.onChange = this._onSettingsChange.bind(this);
    request.onSubmit = this._onSubmit.bind(this);
    request.onCancel = this.onCancel.bind(this);
    this.sidebarService.sidebar = request;

  }

  _onSettingsChange(el) {
    this.element = el;
  }

  _onSubmit(element: any, kind: string, element_id: number) {
    const updatedElementSettings = {
      ...element,
      block: {
        ...this.element.attrs.block
      },
    };

    this.elementsService
      .updateElement(updatedElementSettings, kind, element_id)
      .subscribe((response: any) => {
        this.element.attrs = response.element.attrs;
      });

    this.sidebarService.openDefault();
  }

  onCancel(settings: any) {
    this.element.attrs = settings;
    this.sidebarService.openDefault();
  }
}

