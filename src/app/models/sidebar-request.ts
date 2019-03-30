import {SIDEBARS} from "../constructor/sidebar/const";

export class SidebarRequest {
  public payload?: object;
  public onChange?: Function;
  public onCancel?: Function;
  constructor(
    public type: SIDEBARS,
    public onSubmit?: Function) {
  }
}
