import {ELEMENT_DEFAULT_SETTINGS} from "./default-settings";
import {ELEMENTS_TYPE} from "./elements-type";

export interface ElementParams {
  id: null | number;
  container_id: number;
  kind: ELEMENTS_TYPE;
  main_settings: {};
}

export class Element {
  bg_image: string = ELEMENT_DEFAULT_SETTINGS.bg_image;
  bg_color: string = ELEMENT_DEFAULT_SETTINGS.bg_color;
  size: number = ELEMENT_DEFAULT_SETTINGS.size;
  position: number = ELEMENT_DEFAULT_SETTINGS.position;
  offset_top: number = ELEMENT_DEFAULT_SETTINGS.offset_top;
  offset_right: number = ELEMENT_DEFAULT_SETTINGS.offset_right;
  offset_bottom: number = ELEMENT_DEFAULT_SETTINGS.offset_bottom;
  offset_left: number = ELEMENT_DEFAULT_SETTINGS.offset_left;

  id: null | number;
  container_id: number;
  kind: string;
  main_settings: {};

  constructor(params: ElementParams) {
    this.id = params.id;
    this.container_id = params.container_id;
    this.kind = params.kind;
    this.main_settings = {};
  }
}
