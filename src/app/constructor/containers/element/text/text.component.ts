import {Component, Input, OnInit} from '@angular/core';
import {ElementText} from "../../../../models/elements-classes";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() element: ElementText;

  constructor(private sanitizer: DomSanitizer) {}
get saveContent() {
    return this.sanitizer.bypassSecurityTrustHtml(this.element.attrs.block.content)
}
    ngOnInit() {

  }

}
