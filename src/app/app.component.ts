import {Component} from '@angular/core';
import {mock1} from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'blog-creator';

  constructor() {
  }

}
