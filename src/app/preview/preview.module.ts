import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PreviewComponent} from './preview.component';

@NgModule({
  declarations: [
    PreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PreviewComponent]
})
export class PreviewModule {
}
