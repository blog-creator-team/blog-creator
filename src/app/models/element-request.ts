import {Elements} from "./elements";

export class ElementRequest {
  constructor (
    public kind: Elements,
    public onSubmit?: Function
  ){ }
}
