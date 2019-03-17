import {Element} from './element';
import {CONTAINER_DEFAULT_SETTINGS} from "./default-settings";

export  interface ContainerParams {
  id: null | number;
  position: number;
}

export class Container {
  bg_color: string = CONTAINER_DEFAULT_SETTINGS.bg_color;
  bg_image: string = CONTAINER_DEFAULT_SETTINGS.bg_image;
  offset_top: number = CONTAINER_DEFAULT_SETTINGS.offset_top;
  offset_right: number = CONTAINER_DEFAULT_SETTINGS.offset_right;
  offset_bottom: number = CONTAINER_DEFAULT_SETTINGS.offset_bottom;
  offset_left: number = CONTAINER_DEFAULT_SETTINGS.offset_left;
  elements: Element[] = [];

  id: null | number;
  position: number;

  constructor(params: ContainerParams) {
    this.id = params.id;
    this.position = params.position;
  }
}
