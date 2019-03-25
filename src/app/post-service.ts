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

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(catchError(handleError<Post[]>('getPosts', []))
      );
  }

  constructor(private http: HttpClient) {

  }
  getPost(id): Observable<{ post: Post }> {
    return this.http.get<{ post: Post }>(`${this.postsUrl}/${id}`)
      .pipe(catchError(handleError<{ post: Post }>('getPost id=${id}'))
      );
  }
}
