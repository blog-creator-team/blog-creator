import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Post} from "./models/post";
import {catchError} from "rxjs/operators";
import {handleError} from "./shared/helpers";

@Injectable()
export class PostService {
  private postsUrl = environment.apiUrl + '/v1/posts';
  private id: number;

  public getPosts(): Observable<{ posts: Post[] }> {
    return this.http.get<{ posts: Post[] }>(this.postsUrl)
      .pipe(catchError(handleError<{ posts: Post[] }>('getPosts', {posts: []}))
      );
  }

  constructor(private http: HttpClient) {
  }

  getPost(id): Observable<{ post: Post }> {
    return this.http.get<{ post: Post }>(`${this.postsUrl}/${id}`)
      .pipe(catchError(handleError<{ post: Post }>('getPost id=${id}'))
      );
  }

  addPost(title: string): Observable<{ post: Post }> {
    return this.http.post<{ post: Post }>(`${this.postsUrl}`, {title})
      .pipe(catchError(handleError<{ post: Post }>('addPost'))
      );
  }

  deletePost(id: string): Observable<Post> {
    return this.http.delete<Post>(`${this.postsUrl}/${id}`)
      .pipe(catchError(handleError<Post>('deletePost')))
  }
}
