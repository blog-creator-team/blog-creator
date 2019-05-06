import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";

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
  

  private uploadFileUrl = environment.apiUrl + 'assets/v1/images';
  selectedFile: File = null;

  constructor(private  fb: FormBuilder,
             private http: HttpClient) {
  }

  ngOnInit() {
    this.storedSettings = JSON.parse(JSON.stringify(this.el.attrs));
    this.setFormValue();
  }

  setFormValue(): void {
    this.attrsImgForm = this.fb.group({
      block: this.fb.group({
        src: [this.el.attrs.block.src],
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

  onFileSelect(event) {
    console.log(event)

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.attrsImgForm.get('url').setValue(file);
    }
    // this.selectedFile =<File> event.target.file[0];
  }


  onUpload() {
    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post(`${this.uploadFileUrl}`, formData, {reportProgress: true,
  observe: 'events'})
  .subscribe(event => {
    if (event.type === HttpEventType.UploadProgress){
      console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) +'%' )
    } else if (event.type === HttpEventType.Response) {
      console.log(event)
    }
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
    // const formData = new FormData();
    // formData.append('file', this.attrsImgForm.get('src').value);
    // this.elementsService.uploadFile(fileToUpload).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err),
    //
    // );

    this.submit(this.attrsImgForm.value, this.el.kind, this.el.id);
  }

  onCancel() {
    this.cancel(this.storedSettings);
    this.setFormValue();
  }
}
