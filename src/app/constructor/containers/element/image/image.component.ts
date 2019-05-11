import {Component, Input, OnInit} from '@angular/core';
import {ElementImage} from "../../../../models/elements-classes";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  imgSrc: string;
  alt: string;
  @Input() element: ElementImage;
  constructor() { }

  ngOnInit() {
    const src = this.element.attrs.block.src;
    this.imgSrc = environment.apiUrl + '/assets/' + (src[0] === '/' ? src.replace('/', '') : src);
  }
}
