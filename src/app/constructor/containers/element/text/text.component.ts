import {Component, Input, OnInit} from '@angular/core';
import {ElementText} from "../../../../models/elements-classes";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() element: ElementText;
  content: string;

  constructor() {}

  ngOnInit() {

  }

}
