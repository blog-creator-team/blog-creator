import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

const { apiUrl } = environment;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})

export class PreviewComponent implements OnInit {

  public previewPath$: Observable<SafeUrl> = of(null);

  constructor(
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.previewPath$ = this.activatedRoute.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      map((id: string) => `${apiUrl}/v1/posts/${id}/preview`),
      map((path: string) => this.sanitizer.bypassSecurityTrustResourceUrl(path))
    );
  }
}
