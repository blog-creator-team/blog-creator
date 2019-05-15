import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConstructorComponent} from './constructor/constructor.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PreviewComponent} from './preview/preview.component';
import {PostsListComponent} from "./posts-list/posts-list.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: 'home-page', component: HomePageComponent
  },
  {
    path: 'posts/:id', children: [
      {path: 'constructor', component: ConstructorComponent},
      {path: 'preview', component: PreviewComponent}
    ]
  },
  {
    path: 'posts-list', component: PostsListComponent
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
