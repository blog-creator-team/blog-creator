import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sidebar-elem-text',
  templateUrl: './sidebar-elem-text.component.html',
  styleUrls: ['./sidebar-elem-text.component.scss']
})

export class SidebarElemTextComponent implements OnInit {
  attrsTextForm: FormGroup = this.fb.group({
    content: ['Your text', Validators.required],
    offsets: this.fb.group({
      top: ['20'],
      left: ['10'],
      right: ['10'],
      bottom: ['20'],
    })
  });

  @Output()changed = new EventEmitter<FormGroup>();

  onChanged(): void {
    const value = this.attrsTextForm.value;
    this.changed.emit(value);

  }
  constructor(private  fb: FormBuilder) {}

  ngOnInit() {
  }
}
