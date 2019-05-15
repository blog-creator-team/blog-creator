import {Element} from "./element"
import {ELEMENTS_TYPE} from "./elements-type";
import {DESTINATION_TYPE} from "./destination-type";

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
      text: "Example link",
      destination_type: DESTINATION_TYPE
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
