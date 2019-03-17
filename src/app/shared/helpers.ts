import {ELEMENTS_TYPE} from "../models/elements-type";
import {ElementBlank, ElementImage, ElementLink, ElementText} from "../models/elements-classes";


export   function getElementConstructor(elementKind: ELEMENTS_TYPE) {
  switch (elementKind) {
    case ELEMENTS_TYPE.TEXT:
      return ElementText;

    case ELEMENTS_TYPE.IMAGE:
      return ElementImage;

    case ELEMENTS_TYPE.LINK:
      return ElementLink;

    case ELEMENTS_TYPE.BLANK:
      return ElementBlank;
  }
}
