import {Component, OnInit} from '@angular/core';
import {map} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post";
import {PostService} from "../post-service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private postsUrl = environment.apiUrl + '/v1/posts';
  private post: Post;
  private posts: Post[];

  constructor(private http: HttpClient,
              private  postService: PostService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPosts();
    this.publishPost();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(response => this.posts = response.posts);
  }

  publishPost(): void {
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      map((id: string) => `${this.postsUrl}/${id}/publish`)
    );
  }
}


