import {SIDEBARS} from "../constructor/sidebar/const";
import {SidebarRequest} from "./sidebar-request";
import {Element} from "./element";


export class ElementSidebarRequest extends SidebarRequest {
  public onSubmit: (kind: string) => void;
  public onChange: (element: Element) => void;
  public onCansel: () => void;
  constructor(public payload: Element) {
    super(SIDEBARS.ELEMENT);
  }
}
