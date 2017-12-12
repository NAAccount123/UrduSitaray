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
import { StoreContentService } from "./sr-add-content/services/store-content.service";
import { AddArtcleComponent } from './sr-add-content/add-artcle/add-artcle.component';
import { FormsModule } from "@angular/forms";
import { NgModelComponent } from './Common/ng-model/ng-model.component';


@NgModule({
  declarations: [
    AppComponent,
    SrNavComponent,
    SrContentComponent,
    SrAddContentComponent,
    MainBodyComponent,
    AddArtcleComponent,
    NgModelComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule      
  ],
  providers: [StoreContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
