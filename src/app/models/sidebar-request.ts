import {SIDEBARS} from "../constructor/sidebar/const";

export class SidebarRequest {
   constructor (
    public type: SIDEBARS,
    public onSubmit?: Function
  ){ }
}
