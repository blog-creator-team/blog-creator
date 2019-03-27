import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ElementResponse} from "../../../models/element";
import {catchError} from "rxjs/operators";
import {handleError} from "../../../shared/helpers";

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  private containersUrl = environment.apiUrl + '/v1/containers';
  private elementsUrl = environment.apiUrl + '/v1/containers/elements';

  constructor(private http: HttpClient) {
  }

  /** POST: create new element  ------------------------------------------------*/
  createElement(kind, position, containerId): Observable<ElementResponse> {
      return this.http.post<ElementResponse>(`${this.containersUrl}/${containerId}/elements`,
      {position, kind})
      .pipe(catchError(handleError<ElementResponse>('deleteElement')))
  }
}
