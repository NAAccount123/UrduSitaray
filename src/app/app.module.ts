import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SrNavComponent } from './sr-nav/sr-nav.component';
import { SrContentComponent } from './sr-content/sr-content.component';
import { SrAddContentComponent } from './sr-add-content/sr-add-content.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainBodyComponent } from './main-body/main-body.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SrNavComponent,
    SrContentComponent,
    SrAddContentComponent,
    MainBodyComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
