import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {SIDEBARS} from './const';
import {SidebarRequest} from "../../models/sidebar-request";

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  private _sidebar$ = new BehaviorSubject<SidebarRequest>(new SidebarRequest(SIDEBARS.DEFAULT));

  get sidebar$(): Observable<SidebarRequest> {
    return this._sidebar$.asObservable();
  }
  //метод позволяет подписаться на свойство _sidebar$ как Observable.

  set sidebar(request: SidebarRequest) {
    this._sidebar$.next(request);
    }
//способ позволяет компонентам обновлять значение состояния, хранящегося в сервисе.

  openDefault(): void {
    this.sidebar = new SidebarRequest(SIDEBARS.DEFAULT);
  }
}

