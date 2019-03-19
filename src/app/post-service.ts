import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Post} from "./models/post";
import {catchError, tap} from "rxjs/operators";


@Injectable()
export class PostService {
  private postUrl = environment.apiUrl;

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl)
  }

  constructor(private http: HttpClient) {

  }

  getPost(id): Observable<{ post: Post }> {
    return this.http.get<{ post: Post }>(`${this.postUrl}/v1/posts/${id}`)
      .pipe(
        tap(() =>
          catchError(this.handleError<Post>('getPost')))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
