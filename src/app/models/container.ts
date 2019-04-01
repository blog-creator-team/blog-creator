import {Element} from './element';

export interface ContainerResponse {
  container: Container,
}

export interface ContainerParams {
  id: null | number;
  position: number;
  elements: Element[];
  attrs: {
    bg_color: string;
    bg_image: string;
    offsets: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }
  }
}

export class Container {
  id: null | number;
  position: number;
  elements: Element[];
  attrs: {
    bg_color: string;
    bg_image: string;
    offsets: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }
  }

  constructor(params: ContainerParams) {
    this.id = params.id;
    this.position = params.position;
    this.elements = params.elements;
    this.attrs = {
      bg_color: params.attrs.bg_color,
      bg_image: params.attrs.bg_image,
      offsets: {
        top: params.attrs.offsets.top,
        right: params.attrs.offsets.right,
        bottom: params.attrs.offsets.bottom,
        left: params.attrs.offsets.left,
      }
    }
  }
}
