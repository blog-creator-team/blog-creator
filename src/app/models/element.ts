import {ELEMENTS_TYPE} from "./elements-type";

export interface ElementResponse {
  element: Element;
}

export interface ElementParams {
  id: null | number;
  container_id: number;
  kind: ELEMENTS_TYPE;
  main_settings: {};

}

export class Element {
  bg_image: string;
  bg_color: string;
  size: number;
  position: number;
  offset_top: number;
  offset_right: number;
  offset_bottom: number;
  offset_left: number;

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
