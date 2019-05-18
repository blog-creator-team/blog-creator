import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../post-service";

@Component({
  selector: 'app-sidebar-default',
  templateUrl: './sidebar-default.component.html',
  styleUrls: ['./sidebar-default.component.scss'],
})

export class SidebarDefaultComponent {
  blogName: string = 'Jesus blog';
  author: string = 'Jesus';

  constructor(private postService: PostService) {}

  setBlogInfo() {
    this.postService.saveBlogInfo({name: this.blogName, author: this.author})
      .subscribe(response => console.log(response))
  }
}
