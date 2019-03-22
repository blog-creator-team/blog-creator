import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Post} from "./models/post";
import {catchError} from "rxjs/operators";
import {Container, ContainerResponse} from "./models/container";



@Injectable()
export class PostService {
  private postsUrl = environment.apiUrl + '/v1/posts';
  private containersUrl = environment.apiUrl + '/v1/containers';

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  constructor(private http: HttpClient) {

  }

  getPost(id): Observable<{ post: Post }> {
    return this.http.get<{ post: Post }>(`${this.postsUrl}/${id}`)
      .pipe(catchError(this.handleError<{ post: Post }>('getPost id=${id}'))
      );
  }

  /** POST: add a new container  ------------------------------------------------------------------- */

  addContainer(container: Container): Observable<ContainerResponse> {

    return this.http.post<ContainerResponse>(`${this.postsUrl}` + '/6' + '/containers',
      {position: container.position})
      .pipe(catchError((this.handleError<ContainerResponse>('addContainer'))));
  }

  /** DELETE: delete the container ------------------------------------------------------------------*/

  deleteContainer(container: Container | number): Observable<Container> {
    const id = typeof container === 'number' ? container : container.id;
    return this.http.delete<Container>(`${this.containersUrl}/${id}`)
      .pipe(catchError(this.handleError<Container>('deleteContainer')))
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
