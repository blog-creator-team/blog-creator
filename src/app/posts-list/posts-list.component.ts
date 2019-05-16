import {Component, OnInit} from '@angular/core';
import {Post} from "../models/post";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../post-service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
 public posts: Post[];
  private post: Post;
  private postId: number;

  constructor(
    private http: HttpClient,
    private  postService: PostService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('id');
    });

    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(response => {
          this.posts = response.posts;
      })
  }

  getPostUrl (post: Post): string {
    return `/posts/${post.id}/constructor`
  }

  delete(postId: string): void {
    this.postService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== postId);
    });
  }
}

