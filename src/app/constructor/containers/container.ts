import {Element} from '../../models/element';

export  interface ParamsContainer {
  id: number;
  offset_top: number;
  offset_right: number;
  offset_bottom: number;
  offset_left: number;
  bg_color: string;
  bg_image: string;
  post_id: number | null;
  position: number;
  elements: Element[];
}

export class Container {
  id: number;
  offset_top: number;
  offset_right: number;
  offset_bottom: number;
  offset_left: number;
  bg_color: string;
  bg_image: string;
  post_id: number | null;
  position: number;
  elements: Element[];

  constructor(params: ParamsContainer) {
    this.id = params.id;
    this.offset_top = params.offset_top;
    this.offset_right = params.offset_right;
    this.offset_bottom = params.offset_bottom;
    this.offset_left = params.offset_left;
    this.bg_color = params.bg_color;
    this.bg_image = params.bg_image;
    this.post_id = params.post_id;
    this.position = params.position;
    this.elements = params.elements;
  }
}
