import {Component} from '@angular/core';
import {Container} from "./container";
import {CONTAINER_DEFAULT_SETTINGS} from "./constants";

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent {
  // @Input containers: Container[] = [];
  containers: Container[] = [];

  constructor() {
  }

  addContainer(index: number) {
    const container = new Container(CONTAINER_DEFAULT_SETTINGS);
    this.containers.splice(index, 0, container);
  }
}
