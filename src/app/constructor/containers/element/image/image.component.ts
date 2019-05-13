import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ElementImage} from "../../../../models/elements-classes";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnChanges {
  imgSrc: string;
  alt: string;
  @Input() element: ElementImage;
  constructor() { }

  ngOnChanges(changes: any): void {
    this.createUrl();
  }

  createUrl () {
    const src = this.element.attrs.block.src;
    this.imgSrc = environment.appUrl + '/assets/' + (src[0] === '/' ? src.replace('/', '') : src);
  }
}
