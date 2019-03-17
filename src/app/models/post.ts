import {Container} from "./container";

export interface PostParams {
  title: string,
  published: boolean,
  bg_color: string,
  bg_image: null,
  thumbnail: string,
  description: null,
  offset_top: null,
  offset_right: null,
  offset_bottom: null,
  offset_left: null,
  containers: Container[]
}

export class Post {
  title: string;
  published: boolean;
  bg_color: string;
  bg_image: null;
  thumbnail: string;
  description: null;
  offset_top: null;
  offset_right: null;
  offset_bottom: null;
  offset_left: null;
  containers: Container[];

  constructor(params: PostParams) {
    this.title = params.title,
    this.published = params.published,
    this.bg_color = params.bg_color;
    this.bg_image = params.bg_image;
    this.thumbnail = params.thumbnail;
    this.description = params.description;
    this.offset_top = params.offset_top;
    this.offset_right = params.offset_right;
    this.offset_bottom = params.offset_bottom;
    this.offset_left = params.offset_left;
    this.containers = params.containers;
  }
}
