import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from "rxjs/operators";


@Component({
  selector: 'app-sidebar-elem-text',
  templateUrl: './sidebar-elem-text.component.html',
  styleUrls: ['./sidebar-elem-text.component.scss']
})

export class SidebarElemTextComponent implements OnInit {

  @Output() changed = new EventEmitter<FormGroup>();
  @Output() cancel = new EventEmitter<FormGroup>();
  @Input() submit;
  @Input() el: any;

  private attrsTextForm: FormGroup;
  private value: any;
  private _storedSettings: any;
  private element: any;

  constructor(private  fb: FormBuilder) {
  }

  ngOnInit() {
    this.attrsTextForm = this.fb.group({
      block: this.fb.group({
        content: [this.el.attrs.block.content, Validators.required]
      }),
      offsets: this.fb.group({
        top: [this.el.attrs.offsets.top],
        left: [this.el.attrs.offsets.left],
        right: [this.el.attrs.offsets.right],
        bottom: [this.el.attrs.offsets.bottom],
      }),
      bg_color: ['#FFF']
    });

    this.onChanged();

    // this._storedSettings = JSON.stringify(this.element);
  }

  onChanged(): void {
    const value = this.attrsTextForm.value;
    this.attrsTextForm.valueChanges.pipe(
      debounceTime(400))
      .subscribe((value) => {
        this.value = value;
      });
    this.changed.emit(value);
  }

  onSubmit() {
    console.log(this.submit)
    this.submit(this.attrsTextForm.value, this.el.kind, this.el.id)
  }

  onCancel() {
    // this.element = JSON.parse(this._storedSettings);
  }
}

