import {Element} from "./element"
import {ELEMENTS_TYPE} from "./elements-type";

export class ElementImage extends Element {
  constructor(params) {
    super(params);
    this.kind = ELEMENTS_TYPE.IMAGE;
    this.main_settings = {
      src: "https://d1y0dpztrh9xjz.cloudfront.net/assets/placeholder.png",
      alt: "Placeholder image",
    };
  }
}

export class ElementLink extends Element {
  constructor(params) {
    super(params);
    this.kind = ELEMENTS_TYPE.LINK;
    this.main_settings = {
      text: "Example link"
    };
  }
}


export class ElementText extends Element {
  constructor(params) {
    super(params);
    this.kind = ELEMENTS_TYPE.TEXT;
    this.main_settings = {
      content: "Hey! Your text will be here"
    };
  }
}
