import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-sidebar-elem-image',
  templateUrl: './sidebar-elem-image.component.html',
  styleUrls: ['./sidebar-elem-image.component.scss']
})
export class SidebarElemImageComponent implements OnInit {
  @Input() changed;
  @Input() submit;
  @Input() el: any;
  @Input() cancel;
  private attrsImgForm: FormGroup;
  private value: string;
  private storedSettings: string;
  content: string;

  constructor(private  fb: FormBuilder) { }

  ngOnInit() {
    this.storedSettings = JSON.parse(JSON.stringify(this.el.attrs));
    this.setFormValue();
  }

  setFormValue(): void {
    this.attrsImgForm = this.fb.group({
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
    const value = this.attrsImgForm.value;
    this.attrsImgForm.valueChanges.pipe(
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
    this.submit(this.attrsImgForm.value, this.el.kind, this.el.id);
  }



  onCancel() {
    this.cancel(this.storedSettings);
    this.setFormValue();
  }
}
