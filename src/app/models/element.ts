interface Params {
  object: object;
  string: string;
  number: number;
  id: number;
  offset_top: string;
  offset_right: string;
  offset_bottom: string;
  offset_left: string;
  bg_color: string;
  bg_image: string;
  post_id: number | null;
  position: number;
  main_settings: object
}

export class Element {
  id: number;
  container_id: number;
  offset_top: string;
  offset_right: string;
  offset_bottom: string;
  offset_left: string;
  bg_image: string;
  bg_color: string;
  size: number;
  position: number;
  kind: string;
  main_settings: object;

  constructor(params: Params) {
    this.id = params.number;
    this.container_id = params.number;
    this.offset_top = params.string;
    this.offset_right = params.string;
    this.offset_bottom = params.string;
    this.offset_left = params.string;
    this.bg_image = params.string;
    this.bg_color = params.string;
    this.size = params.number;
    this.position = params.number;
    this.kind = params.string;
    this.main_settings = params.object;
  }
}
