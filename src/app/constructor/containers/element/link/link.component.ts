import {Component, Input, OnInit} from '@angular/core';
import {ElementLink} from "../../../../models/elements-classes";

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() element: ElementLink;
  constructor() { }

  ngOnInit() {
  }

}
