import {Component} from '@angular/core';
import {Container} from "./container";
import {CONTAINER_DEFAULT_SETTINGS} from "./constants";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  containers: Container[] = [];

  constructor() {
  }

  addContainer(index: number) {
    const container = new Container(CONTAINER_DEFAULT_SETTINGS);

    this.containers = [
      ...this.containers.slice(0, index),
      container,
      ...this.containers.slice(index, this.containers.length),
    ];
    /*  имеем массив контейнеров и заполняем его
     ...елементы до текущего индекса,
     новый контейнер и
      ...елементы после текущего индекса */
  }
}
