import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {PreviewModule} from './preview/preview.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './constructor/sidebar/sidebar.component';
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
import {ContainersComponent} from './constructor/containers/containers.component';
import {ElementComponent} from './constructor/containers/element/element.component';
import {ContainerComponent} from './constructor/containers/container/container.component';
import {TextComponent} from './constructor/containers/element/text/text.component';
import {ImageComponent} from './constructor/containers/element/image/image.component';
import {LinkComponent} from './constructor/containers/element/link/link.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './post-service';
import {ContainerService} from './constructor/services/container.service';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxSmartModalModule, NgxSmartModalService} from "ngx-smart-modal";
import {BaseModalComponent} from './constructor/sidebar/modals/base-modal/base-modal.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {TextEditorModalComponent} from './constructor/sidebar/modals/text-editor-modal/text-editor-modal.component';
import {ActionCableService} from "angular2-actioncable";
import {ServerNotificationService} from "./notifications/server-notification.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarElementsComponent,
    SidebarElementComponent,
    SidebarDefaultComponent,
    ConstructorComponent,
    BlogComponent,
    NotFoundComponent,
    SidebarElemTextComponent,
    SidebarElemImageComponent,
    SidebarElemLinkComponent,
    ElementComponent,
    ContainersComponent,
    ElementComponent,
    ContainerComponent,
    TextComponent,
    ImageComponent,
    LinkComponent,
    BaseModalComponent,
    TextEditorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PreviewModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    NgxSmartModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],

  providers: [
    SidebarService,
    PostService,
    ContainerService,
    NgxSmartModalService,
    ActionCableService,
    ServerNotificationService,

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
