import {Component, Input} from '@angular/core';
import {Container, ContainerResponse} from "../../models/container";
import {ContainerService} from "./container.service";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../post-service";

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent {
  @Input() containers: Container[] = [];
  private container: ContainerResponse;
  postId: number;

  constructor(private containerService: ContainerService,
              private  postService: PostService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('id');
    })
  }

  add(position): void {
    this.containerService
      .addContainer(position, this.postId)
      .subscribe((response => {
          response.container.elements = [];
          this.containers.splice(position, 0, response.container)
        }
      ));
  }

  delete(containerId: number): void {
    this.containerService.deleteContainer(containerId).subscribe(() => {
      this.containers = this.containers.filter(c => c.id !== containerId);
    });
  }
}

