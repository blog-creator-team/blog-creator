import {Element} from "./element"

export class ElementImage extends Element {
  kind: string = "image";
  main_settings: object = {
    src: "https://d1y0dpztrh9xjz.cloudfront.net/assets/placeholder.png",
    alt: "Placeholder image",
  }

  constructor(params) {
    super(params);
  }
}

export class ElementLink extends Element {
  kind: string = "link";
  main_settings: object = {
    text: "Example link"
  };

  constructor(params) {
    super(params);
  }
}


export class ElementText extends Element {
  kind: string = "text";
  main_settings: object = {
    content: "Hey! Your text will be here"
  };

  constructor(params) {
    super(params);
  }
}

export class ElementBlank extends Element {
  kind: string = "blank";
  main_settings: {};

  constructor(params) {
    super(params);
  }
}

