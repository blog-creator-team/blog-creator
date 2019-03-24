import {Injectable} from '@angular/core';
import {Container, ContainerResponse} from "../../models/container";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {handleError} from "../../shared/helpers";

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  private postsUrl = environment.apiUrl + '/v1/posts';
  private containersUrl = environment.apiUrl + '/v1/containers';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  /** POST: add a new container  ------------------------------------------------------------------- */

  addContainer(position, postsId): Observable<ContainerResponse> {
    console.log(position)
    return this.http.post<ContainerResponse>(`${this.postsUrl}/${postsId}/containers`,
      {position})
      .pipe(catchError((handleError<ContainerResponse>('addContainer'))));
  }

  /** DELETE: delete the container ------------------------------------------------------------------*/

  deleteContainer(id: number): Observable<Container> {
    return this.http.delete<Container>(`${this.containersUrl}/${id}`)
      .pipe(catchError(handleError<Container>('deleteContainer')))
  }
}

