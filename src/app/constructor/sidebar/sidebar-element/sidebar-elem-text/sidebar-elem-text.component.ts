import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Element} from "../../../../models/element";


@Component({
  selector: 'app-sidebar-elem-text',
  templateUrl: './sidebar-elem-text.component.html',
  styleUrls: ['./sidebar-elem-text.component.scss']
})
export class SidebarElemTextComponent implements OnInit {

  @Output() onChanged = new EventEmitter<Element>();
  change(attrs: string) {
    this.onChanged.emit(attrs);
  }

  settingsTextForm = this.fb.group({
    content: ['', Validators.required],
    offsets: this.fb.group({
      top: ['20'],
      left: ['10'],
      right: ['10'],
      bottom: ['20'],
    })
  });

  constructor(private  fb: FormBuilder) {
  }

  ngOnInit() {
  }
}
