import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Post} from "./models/post";
import {catchError, tap} from "rxjs/operators";


@Injectable()
export class PostService {
  private postsUrl = environment.apiUrl + '/v1/posts';

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}`)
      .pipe(catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  constructor(private http: HttpClient) {

  }

  getPost(id): Observable<{post:Post}> {
    return this.http.get<{post:Post}>(`${this.postsUrl}/g/${id}`)
      .pipe(catchError(this.handleError<{post:Post}>('getPost id=${id}'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
