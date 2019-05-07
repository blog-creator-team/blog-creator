import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgxSmartModalService} from "ngx-smart-modal";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-sidebar-elem-link',
  templateUrl: './sidebar-elem-link.component.html',
  styleUrls: ['./sidebar-elem-link.component.scss']
})
export class SidebarElemLinkComponent implements OnInit {
  @Input() changed;
  @Input() submit;
  @Input() el: any;
  @Input() cancel;

  private attrsTextForm: FormGroup;
  private value: string;
  private storedSettings: string;
  content: string;

  constructor(private  fb: FormBuilder) {
  }

  ngOnInit() {
    this.storedSettings = JSON.parse(JSON.stringify(this.el.attrs));
    this.setFormValue();
    this.content = this.el.attrs.block.content;
  }

  setFormValue(): void {
    this.attrsTextForm = this.fb.group({
      offsets: this.fb.group({
        top: [this.el.attrs.offsets.top],
        left: [this.el.attrs.offsets.left],
        right: [this.el.attrs.offsets.right],
        bottom: [this.el.attrs.offsets.bottom],
      }),
      bg_color: [this.el.attrs.bg_color]
    });
  }

  onChanged(el: any): void {
    const value = this.attrsTextForm.value;
    this.attrsTextForm.valueChanges.pipe(
      debounceTime(200))
      .subscribe((value) => {
        this.value = value;
      });
    this.changed({
      ...el,
      attrs: {
        ...el.attrs,
        ...value,
      }
    });
  }

  onSubmit() {
    this.submit(this.attrsTextForm.value, this.el.kind, this.el.id);
  }

  onCancel() {
    this.cancel(this.storedSettings);
    this.setFormValue();
  }
}
