import {SIDEBARS} from "../constructor/sidebar/const";
import {SidebarRequest} from "./sidebar-request";
import {Element} from "./element";


export class ElementSidebarRequest extends SidebarRequest {
  public onSubmit: (kind: string) => void;

  constructor(public payload: Element) {
    super(SIDEBARS.ELEMENT);
  }
}
