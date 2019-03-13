import {Component, Input, OnInit} from '@angular/core';
import {Container} from "./containers/container";

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})

export class ConstructorComponent implements OnInit {
  // post: Post = MOCK_POST_DATA
  constructor() {

  }

  ngOnInit() {
  }


}
