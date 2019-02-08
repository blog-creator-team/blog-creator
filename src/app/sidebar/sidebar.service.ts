import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {SIDEBARS} from './const';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _sidebar$ = new BehaviorSubject<SIDEBARS>(SIDEBARS.DEFAULT);

  get sidebar$(): Observable<SIDEBARS> {
    return this._sidebar$.asObservable();
  }

  set sidebar(sidebarType: SIDEBARS) {
    this._sidebar$.next(sidebarType);
  }
}

