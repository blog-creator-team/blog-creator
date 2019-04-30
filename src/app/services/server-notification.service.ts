import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ServerNotificationService {

  constructor( private toastr: ToastrService ) { }

  public listen(): void {

  }
}
