import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post";
import {PostService} from "../post-service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private posts: Post[];
  private postId: number;

  constructor(private http: HttpClient,
              private  postService: PostService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => this.postId = +params.get('id'))

    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(response => this.posts = response.posts);
  }

    goToPost(id: string) {
      return `/posts/${id}`;
    }
}


