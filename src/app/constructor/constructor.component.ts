import {Component, OnInit} from '@angular/core';
import {Post} from "../models/post"
import {switchMap} from "rxjs/operators";
import {PostService} from "../post-service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss'],

})

export class ConstructorComponent implements OnInit {
post: Post;
  constructor(private  postService: PostService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
          const postId = +params.get('id');
          return this.postService.getPost(postId)
        }
      )
    ).subscribe((response) => {
        this.post = response.post;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      })
  }
}
