import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SidebarContainerComponent} from './sidebar/sidebar-container/sidebar-container.component';
import {SidebarElementsComponent} from './sidebar/sidebar-elements/sidebar-elements.component';
import {SidebarElementComponent} from './sidebar/sidebar-element/sidebar-element.component';
import {SidebarDefaultComponent} from './sidebar/sidebar-default/sidebar-default.component';
import {ConstructorComponent} from './constructor/constructor.component';
import {SidebarService} from './sidebar/sidebar.service';
import {BlogComponent} from './blog/blog.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'constructor', component: ConstructorComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarContainerComponent,
    SidebarElementsComponent,
    SidebarElementComponent,
    SidebarDefaultComponent,
    ConstructorComponent,
    BlogComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
