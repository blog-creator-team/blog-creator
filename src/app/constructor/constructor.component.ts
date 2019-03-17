import {Component, OnInit} from '@angular/core';
import {MOCK_POST_DATA} from "../mocks/mock-post-data";
import {Post} from "../models/post"

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})

export class ConstructorComponent implements OnInit {
  post: Post = MOCK_POST_DATA;

  constructor() {

  }

  ngOnInit() {
  }


}
