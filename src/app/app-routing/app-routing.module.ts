import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  SrAddContentComponent} from '../sr-add-content/sr-add-content.component'
import { AppComponent } from '../app.component';
import { MainBodyComponent } from '../main-body/main-body.component';

const routes: Routes = [
    {
        path: '',
        component: MainBodyComponent,
    },
    {
      path: 'admin',
      component: SrAddContentComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }