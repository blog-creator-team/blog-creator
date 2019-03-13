export interface Params {
  size: number;
  object: object;
  string: string;
  number: number;
  id: number;
  container_id: number;
  offset_top: number;
  offset_right: number;
  offset_bottom: number;
  offset_left: number;
  bg_color: string;
  bg_image: string;
  post_id: number | null;
  position: number;
  kind: string;
}

export class Element {
  id: number;
  container_id: number;
  offset_top: number;
  offset_right: number;
  offset_bottom: number;
  offset_left: number;
  bg_image: string;
  bg_color: string;
  size: number;
  position: number;
  kind: string;

  constructor(params: Params) {
    this.id = params.id;
    this.container_id = params.container_id;
    this.offset_top = params.offset_top;
    this.offset_right = params.offset_right;
    this.offset_bottom = params.offset_bottom;
    this.offset_left = params.offset_left;
    this.bg_image = params.bg_image;
    this.bg_color = params.bg_color;
    this.size = params.size;
    this.position = params.position;
    this.kind = params.kind;
  }
}
