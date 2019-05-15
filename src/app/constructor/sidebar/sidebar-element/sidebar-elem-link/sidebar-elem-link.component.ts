import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {logger} from "codelyzer/util/logger";

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

  private attrsLinkForm: FormGroup;
  private value: string;
  private storedSettings: string;
  private text: string;
  private destination_types: any = ['external', 'homepage', 'post'];
  private posts: any = [];

  constructor(private  fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.storedSettings = JSON.parse(JSON.stringify(this.el.attrs));
    this.setFormValue();
    console.log(this.attrsLinkForm)
  }

  setFormValue(): void {
    this.attrsLinkForm = this.fb.group({
      block: this.fb.group({
        text: [this.el.attrs.block.text],
        destination_type: ['external'],
        destination: [''],
      }),
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
    const value = this.attrsLinkForm.value;
    console.log(value)
    this.attrsLinkForm.valueChanges.pipe(
      debounceTime(200))
      .subscribe((value) => {
        this.value = value;
      });
    this.changed({
      ...el,
      attrs: {
        ...el.attrs,
        ...value,
        block: {
          ...el.block,
        }
      }
    });
  }



  onSubmit() {
    this.submit(this.attrsLinkForm.value, this.el.kind, this.el.id, this.text);
    console.log(this.text)
  }

  onCancel() {
    this.cancel(this.storedSettings);
    this.setFormValue();
  }
}
