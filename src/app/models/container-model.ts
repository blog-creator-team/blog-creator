import {Element} from './element';

export class Container {
  "id": number;
  "offset_top": string;
  "offset_right": string;
  "offset_bottom": string;
  "offset_left": string;
  "bg_color": string;
  "bg_image": string;
  "post_id": number;
  "position": number;
  "elements": Element[];
}
