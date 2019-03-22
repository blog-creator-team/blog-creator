import {Element} from './element';

export  interface ContainerResponse {
  container: Container
}

export  interface ContainerParams {
  id: null | number;
  position: number;
  elements: Element[];
}

export class Container {
  bg_color: string ;
  bg_image: string;
  offset_top: number;
  offset_right: number;
  offset_bottom: number;
  offset_left: number;

  id: null | number;
  position: number;
  elements: Element[];

  constructor(params: ContainerParams) {
    this.id = params.id;
    this.position = params.position;
    this.elements = params.elements;
  }
}
