import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {environment} from '../../environments/environment';
import {ActionCableService, Cable} from 'angular2-actioncable';
import {Notification} from './notification';
import {NotificationType} from './notification-type';
import {EventChannel} from './event-channel';

@Injectable({ providedIn: 'root' })
export class ServerNotificationService {
  events: Cable;

  constructor( private toastr: ToastrService, cableService: ActionCableService) {
    this.events = cableService.cable(environment.actionCableUrl);
  }

  public listen(): void {
    const params = { token: localStorage.getItem('auth token') };
    const channel = this.events.channel(EventChannel.NOTIFICATIONS, params);
    channel.received().subscribe(this.showNotification.bind(this));
  }

  private showNotification(notification: Notification): void {
    switch (notification.type) {
      case NotificationType.SUCCESS:
        this.toastr.success(notification.message);
        break;
      case NotificationType.ERROR:
        this.toastr.error(notification.message);
    }
  }
}
