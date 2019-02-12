import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './constructor/sidebar/sidebar.component';
import {SidebarContainerComponent} from './constructor/sidebar/sidebar-container/sidebar-container.component';
import {SidebarElementsComponent} from './constructor/sidebar/sidebar-elements/sidebar-elements.component';
import {SidebarElementComponent} from './constructor/sidebar/sidebar-element/sidebar-element.component';
import {SidebarDefaultComponent} from './constructor/sidebar/sidebar-default/sidebar-default.component';
import {ConstructorComponent} from './constructor/constructor.component';
import {SidebarService} from './constructor/sidebar/sidebar.service';
import {BlogComponent} from './blog/blog.component';
import {NotFoundComponent} from './not-found/not-found.component';


const appRoutes: Routes = [ ];

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
