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
  private elementsUrl = environment.apiUrl + '/v1/elements';

  private uploadFileUrl = environment.apiUrl + '/assets/v1/images';
  private selectedFile: null;

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

  updateElement(element: ElementResponse, kind: string, element_id: number): Observable<ElementResponse> {
    console.log(1, element)
    return this.http.put<ElementResponse>(`${this.elementsUrl}/${element_id}/${kind}`, {...element})
      .pipe(catchError(handleError<ElementResponse>('updateElement')));
  }

  // onUpload() {
  //   let input = new FormData();
  //   input.append("file", this.fileToUpload);
  //   const fb = new FormData();
  //   fb.append('image', this.selectedFile, this.selectedFile.name)
  //   this.http.post(`${this.uploadFileUrl}`, fb).subscribe(res => {
  //     console.log(res)
  //   });
  // }

 }
