import {ELEMENTS_TYPE} from "./elements-type";

export interface ElementResponse {
  kind: string;
  element: Element;
}

export interface ElementParams {
  id: null | number;
  container_id: number;
  kind: ELEMENTS_TYPE;
  attrs: {
    bg_color: string;
    bg_image: string;
    offsets: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }
    block: {}
  }

}

export class Element {
  size: number;
  position: number;
  id: null | number;
  container_id: number;
  kind: string;
  attrs: {
    bg_color: string;
    bg_image: string;
    offsets: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }
    block: {};
  };

  constructor(params: ElementParams) {
    this.id = params.id;
    this.container_id = params.container_id;
    this.kind = params.kind;
    this.attrs = {
      bg_color: params.attrs.bg_color,
      bg_image: params.attrs.bg_image,
      offsets: {
        top: params.attrs.offsets.top,
        right: params.attrs.offsets.right,
        bottom: params.attrs.offsets.bottom,
        left: params.attrs.offsets.left,
      },
      block: params.attrs.block,
    }
  }
}
