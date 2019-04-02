import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ElementResponse} from "../../models/element";
import {catchError} from "rxjs/operators";
import {handleError} from "../../shared/helpers";

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  private containersUrl = environment.apiUrl + '/v1/containers';
  private  elementsUrl = environment.apiUrl + '/v1/elements';

  constructor(private http: HttpClient) {
  }

  createElement(kind, position, containerId): Observable<ElementResponse> {
    return this.http.post<ElementResponse>(`${this.containersUrl}/${containerId}/elements`,
      {position, kind})
      .pipe(catchError(handleError<ElementResponse>('deleteElement')))
  }

  deleteElement(elementId): Observable<Element> {
    return this.http.delete<Element>(`${this.elementsUrl}/${elementId}`)
      .pipe(catchError(handleError<Element>('deleteElement')))
  }



  updateElement(element, elementId): Observable<Element> {
    return this.http.put<Element>(`${this.elementsUrl}/${elementId}`, element)
      .pipe(catchError(handleError<Element>('updateElement')))
  }
}
