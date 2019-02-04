import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {SIDEBARS} from './const';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public sidebar$ = new BehaviorSubject<any>(SIDEBARS.DEFAULT);

  setSidebar(sidebarType) {
    this.sidebar$.next(sidebarType);
  }
}

