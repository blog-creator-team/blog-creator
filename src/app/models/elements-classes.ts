import {Element} from "./element"
import {ELEMENTS_TYPE} from "./elements-type";

export class ElementImage extends Element {
  kind: string = ELEMENTS_TYPE.IMAGE;
  main_settings: object = {
    src: "https://d1y0dpztrh9xjz.cloudfront.net/assets/placeholder.png",
    alt: "Placeholder image",
  }
}

export class ElementLink extends Element {
  kind: string = ELEMENTS_TYPE.LINK;
  main_settings: object = {
    text: "Example link"
  };
}


export class ElementText extends Element {
  kind: string = ELEMENTS_TYPE.TEXT;
  main_settings: object = {
    content: "Hey! Your text will be here"
  };
}

export class ElementBlank extends Element {
  kind: string = ELEMENTS_TYPE.BLANK;
  main_settings: {};
}

