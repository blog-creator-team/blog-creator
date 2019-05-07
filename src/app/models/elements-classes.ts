import {Element} from "./element"
import {ELEMENTS_TYPE} from "./elements-type";

export class ElementImage extends Element {
  constructor(params) {
    super(params);
    this.kind = ELEMENTS_TYPE.IMAGE;
    this.attrs.block = {
      src: "https:// http://18.184.84.119/assets/placeholder.png",
      alt: "Placeholder image",
    };
  }
}

export class ElementLink extends Element {

  constructor(params) {
    super(params);
    this.kind = ELEMENTS_TYPE.LINK;
    this.attrs.block = {
      content: "Example link"
    };
  }
}


export class ElementText extends Element {
  block: {
    content: "Hey! Your text will be here"
  };
  constructor(params) {
    super(params);
    this.kind = ELEMENTS_TYPE.TEXT;
  }
}
