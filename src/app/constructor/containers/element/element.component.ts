import {Component, Input, OnInit} from '@angular/core';
import {Element} from "../../../models/element";
import {ELEMENTS_TYPE} from "../../../models/elements-type";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() element: Element;


  constructor() {

  }

  ngOnInit() {

  }

}
