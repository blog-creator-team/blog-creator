import {Component, OnInit} from '@angular/core';
import {ServerNotificationService} from './notifications/server-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  constructor( private serverNotifications: ServerNotificationService ) {}

  ngOnInit(): void {
    this.serverNotifications.listen();
  }
}
