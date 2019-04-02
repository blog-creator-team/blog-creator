import {SIDEBARS} from "../constructor/sidebar/const";
import {SidebarRequest} from "./sidebar-request";
import {Element} from "./element";


export class ElementSidebarRequest extends SidebarRequest {
  public onSubmit: () => void;
  public onChange: (element: Element) => void;
  public onCancel: () => void;

  constructor(public payload: Element) {
    super(SIDEBARS.ELEMENT);
  }
}
