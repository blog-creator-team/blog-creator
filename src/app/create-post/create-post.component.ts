import { Component, OnInit } from '@angular/core';
import {PostService} from "../post-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  title: string = '';
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onTitleSubmit() {
    this.postService.addPost(this.title).subscribe(response => {
      this.router.navigate([`/posts/${response.post.id}/constructor`])
    });
  }
}
