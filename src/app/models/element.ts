export interface Params {
  object: object;
  string: string;
  number: number;
  id: number;
  offset_top: number;
  offset_right: number;
  offset_bottom: number;
  offset_left: number;
  bg_color: string;
  bg_image: string;
  post_id: number | null;
  position: number;
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
    this.id = params.number;
    this.container_id = params.number;
    this.offset_top = params.number;
    this.offset_right = params.number;
    this.offset_bottom = params.number;
    this.offset_left = params.number;
    this.bg_image = params.string;
    this.bg_color = params.string;
    this.size = params.number;
    this.position = params.number;
    this.kind = params.string;
  }
}
