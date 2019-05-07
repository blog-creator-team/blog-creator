import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgxSmartModalComponent, NgxSmartModalService} from "ngx-smart-modal";


@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})

export class BaseModalComponent {
  @Output() submit: EventEmitter<undefined> = new EventEmitter();
  @Input() id: string;
  @Input() heading: string;
  @Input() content: string;
  @ViewChild('baseModal') baseModal: NgxSmartModalComponent;

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }

  onSubmit() {
    this.submit.emit();
    this.baseModal.close();
  }
}

