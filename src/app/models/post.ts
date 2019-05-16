import {Container} from "./container";

export interface PostParams {
  title: string,
  published: boolean,
  containers: Container[],
  description: null,
  attrs: {
    bg_color: string;
    bg_image: string;
    thumbnail: string;
    offsets: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }
  }
}

export class Post {
  id?: string;
  title: string;
  published: boolean;
  description: null;
  containers: Container[];
  attrs: {
    bg_color: string;
    bg_image: string;
    thumbnail: string;
    offsets: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }
  };

  constructor(params: PostParams) {
    this.title = params.title;
    this.published = params.published;
    this.containers = params.containers;
    this.description = params.description;
    this.attrs = {
      bg_color: params.attrs.bg_color,
      bg_image: params.attrs.bg_image,
      thumbnail: params.attrs.thumbnail,
      offsets: {
        top: params.attrs.offsets.top,
        right: params.attrs.offsets.right,
        bottom: params.attrs.offsets.bottom,
        left: params.attrs.offsets.left,
      }
    }
  }
}
