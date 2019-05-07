import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

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

  private uploadFileUrl = environment.apiUrl + '/v1/images';
  private src: string;

  constructor(private  fb: FormBuilder,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.storedSettings = JSON.parse(JSON.stringify(this.el.attrs));
    this.setFormValue();
    // this.el.attrs.block.src = this.val;
    // this.src = this.val;
  }

  setFormValue(): void {
    this.attrsImgForm = this.fb.group({
      block: this.fb.group({
        alt: [this.el.attrs.block.alt],
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

  fileChange(event) {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('image', file, file.name);
      this.http.post(this.uploadFileUrl, formData, {
        observe: 'events',
      })
        .subscribe((event: any) => {
          if (event.type === HttpEventType.Response) {
            this.src = event.body.url;
          }
        });
    }
  }

  onChanged(el: any): void {
    console.log(el)
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
        block: {
          ...el.block,
          src: this.src
        }
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
