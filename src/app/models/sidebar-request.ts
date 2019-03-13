import {SIDEBARS} from "../constructor/sidebar/const";

export class SidebarRequest {
  public payload?: object;

  constructor(
    public type: SIDEBARS,
    public onSubmit?: Function) {
  }
}
