import {SIDEBARS} from "../constructor/sidebar/const";

export class SidebarRequest {
  public payload?: object;
  public onChange?: Function;
  public onCansel?: Function;
  constructor(
    public type: SIDEBARS,
    public onSubmit?: Function) {
  }
}
