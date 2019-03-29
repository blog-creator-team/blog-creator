import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {PreviewModule} from './preview/preview.module';
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
import {SidebarElemTextComponent} from './constructor/sidebar/sidebar-element/sidebar-elem-text/sidebar-elem-text.component';
import {SidebarElemImageComponent} from './constructor/sidebar/sidebar-element/sidebar-elem-image/sidebar-elem-image.component';
import {SidebarElemLinkComponent} from './constructor/sidebar/sidebar-element/sidebar-elem-link/sidebar-elem-link.component';
import {SidebarElemBlankComponent} from './constructor/sidebar/sidebar-element/sidebar-elem-blank/sidebar-elem-blank.component';
import {ContainersComponent} from './constructor/containers/containers.component';
import {ElementComponent} from './constructor/containers/element/element.component';
import {ContainerComponent} from './constructor/containers/container/container.component';
import {TextComponent} from './constructor/containers/element/text/text.component';
import {ImageComponent} from './constructor/containers/element/image/image.component';
import {LinkComponent} from './constructor/containers/element/link/link.component';
import {BlankComponent} from './constructor/containers/element/blank/blank.component';
import { HttpClientModule } from '@angular/common/http';
import {PostService} from "./post-service";
import {ContainerService} from "./constructor/services/container.service";

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
    SidebarElemTextComponent,
    SidebarElemImageComponent,
    SidebarElemLinkComponent,
    SidebarElemBlankComponent,
    ContainersComponent,
    ElementComponent,
    ContainerComponent,
    TextComponent,
    ImageComponent,
    LinkComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PreviewModule
  ],
  providers: [
    SidebarService,
    PostService,
    ContainerService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
