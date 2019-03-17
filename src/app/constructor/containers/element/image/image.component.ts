import {Component, Input, OnInit} from '@angular/core';
import {ElementImage} from "../../../../models/elements-classes";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
@Input() element: ElementImage;
  constructor() { }

  ngOnInit() {
  }

}
