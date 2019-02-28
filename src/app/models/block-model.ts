
interface Params {
  id: number | null;
  offset_top: string;
  offset_right: string;
  offset_bottom: string;
  offset_left: string;
  bg_color: string;
  bg_image: string;
  post_id: number | null;
  position: number;
  elements: Element[];
}

export class Container {
  id: number | null;
  offset_top: string;
  offset_right: string;
  offset_bottom: string;
  offset_left: string;
  bg_color: string;
  bg_image: string;
  post_id: number | null;
  position: number;
  elements: Element[];

  constructor(params: Params) {
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
