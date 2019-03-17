import {Component, Input, OnInit} from '@angular/core';
import {Element} from "../../../models/element";
import {ElementBlank, ElementImage, ElementLink, ElementText} from "../../../models/elements-classes";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() element: ElementText | ElementLink | ElementImage | ElementBlank;
  // @Input() element: Element;
  elements: Element[];

  constructor() {
  }

  ngOnInit() {

  }

}
