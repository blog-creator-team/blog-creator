import {Component, Input} from '@angular/core';
import {Container} from "../../models/container";
import {PostService} from "../../post-service";

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent {
  @Input() containers: Container[] = [];

  constructor(private postService: PostService) {
  }

  add(position: number): void {
    this.postService
      .addContainer({position} as Container)
      .subscribe((response => {
          response.container.elements = [],
          this.containers.splice(position, 0, response.container)}
      ));
    console.log(this.containers)
  }

  delete(container: Container): void {
    this.containers = this.containers.filter(c => c !== container);
    this.postService.deleteContainer(container).subscribe();
  }
}
