import {Component, Output, Input, ViewChild, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-text-editor-modal',
  templateUrl: './text-editor-modal.component.html',
  styleUrls: ['./text-editor-modal.component.scss']
})

export class TextEditorModalComponent {
  @Input() el: any;
  @Input() content: string;
  @Output() submit = new EventEmitter();
  @ViewChild('editor') editor: TextEditorModalComponent;
  id: string = 'editor_modal';

  onSubmit() {
    this.submit.emit(this.content);
  }

}

