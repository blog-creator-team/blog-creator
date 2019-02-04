import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarContainerComponent } from './sidebar/sidebar-container/sidebar-container.component';
import { SidebarElementsComponent } from './sidebar/sidebar-elements/sidebar-elements.component';
import { SidebarElementComponent } from './sidebar/sidebar-element/sidebar-element.component';
import { SidebarDefaultComponent } from './sidebar/sidebar-default/sidebar-default.component';
import { PageConstructorComponent } from './page-constructor/page-constructor.component';
import {SidebarService} from './sidebar/sidebar.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarContainerComponent,
    SidebarElementsComponent,
    SidebarElementComponent,
    SidebarDefaultComponent,
    PageConstructorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
