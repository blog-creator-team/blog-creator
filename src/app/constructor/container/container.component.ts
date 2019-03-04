import {Component} from '@angular/core';
import {Container} from "./container";
import {CONTAINER_DEFAULT_SETTINGS} from "./constants";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  containers: Container [] = [];

  constructor() {
  }

  addContainer(index: number, type: string) {
    const container = new Container(CONTAINER_DEFAULT_SETTINGS);

    if (index === this.containers.length) {
      this.containers.push(container);
    } else if (type === 'prepend') {
      const updatedData = [];
      this.containers.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          updatedData.push(container, item)
        } else {
          updatedData.push(item)
        }
      });
      this.containers = updatedData;
    } else if (type === 'append') {
      const updatedData = [];
      this.containers.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          updatedData.push(item, container)
        } else {
          updatedData.push(item)
        }
      });
      this.containers = updatedData;
    }
  }
}
