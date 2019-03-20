import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConstructorComponent} from './constructor/constructor.component';
import {BlogComponent} from './blog/blog.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PreviewComponent} from './preview/preview.component';

const routes: Routes = [
  {
    path: 'posts/constructor', component: ConstructorComponent
  },
  {
    path: 'posts/:id/constructor', component: ConstructorComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'preview', component: PreviewComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
