import {Component, Input, OnInit} from '@angular/core';
import {ElementImage} from "../../../../models/elements-classes";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  imgSrc: string ='';
@Input() element: ElementImage;
  constructor() { }

  ngOnInit() {
    this.imgSrc = environment.apiUrl + '/assets/' + this.element.attrs.block.src
  }

}
