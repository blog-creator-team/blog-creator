import {SIDEBARS} from "../constructor/sidebar/const";

// export class SidebarRequest {
//   public payload?: object;
//   public onSubmit?: Function;
//
//    constructor (public type: SIDEBARS){ }
// }
//
// export class ElementSidebarRequest extends SidebarRequest {
//   public onSubmit?: (kind: string) => void;
//
//   constructor(public payload: Element) {
//     super(SIDEBARS.ELEMENT)
//   }
// }

export class SidebarRequest {
  constructor (
  public type: SIDEBARS,
  public onSubmit?: Function
){}
}
