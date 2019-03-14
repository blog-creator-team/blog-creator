import {Component, Input, OnInit} from '@angular/core';
import {Element} from "../../../models/element";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() element: Element;
  elements: Element [];

  constructor() {
  }

  ngOnInit() {

  }

}
