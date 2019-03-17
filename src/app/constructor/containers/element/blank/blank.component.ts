import {Component, Input, OnInit} from '@angular/core';
import {ElementBlank} from "../../../../models/elements-classes";

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {
@Input() element: ElementBlank;
  constructor() { }

  ngOnInit() {
  }

}
