import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Post} from "./models/post";
import {catchError} from "rxjs/operators";
import {handleError} from "./shared/helpers";

@Injectable()
export class PostService {
  private postsUrl: string = environment.apiUrl + '/v1/posts';
  private blogUrl: string = environment.apiUrl + '/v1/blog';

  public saveBlogInfo (data: {name: string, author: string}): Observable<any> {
    return this.http.post<{name: string, author: string}>(`${this.blogUrl}`, data)
      .pipe(catchError(handleError<{name: string, author: string}>('saveBlogInfo'))
      );
  }

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

  publishPost(postId: string): Observable<{ post: Post }> {
    return this.http.post<{ post: Post }>(`${this.postsUrl}/${postId}/publish`, null)
      .pipe(catchError(handleError<{ post: Post }>('publishPost'))
      );
  }

  deletePost(id: string): Observable<Post> {
    return this.http.delete<Post>(`${this.postsUrl}/${id}`)
      .pipe(catchError(handleError<Post>('deletePost')))
  }
}
