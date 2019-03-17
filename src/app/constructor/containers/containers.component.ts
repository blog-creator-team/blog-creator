import {Component, Input} from '@angular/core';
import {Container} from "../../models/container";

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent {
  @Input() containers: Container[] = [];

  constructor() {
  }

  addContainer(index: number) {
    const container = new Container({id: null, position: 0});
    this.containers.splice(index, 0, container);
  }
}
