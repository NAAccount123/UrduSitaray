import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrAddContentComponent} from '../sr-add-content/sr-add-content.component'
import { AppComponent } from '../app.component';
import { MainBodyComponent } from '../main-body/main-body.component';
import { AddArtcleComponent } from "../sr-add-content/add-artcle/add-artcle.component";

const routes: Routes = [
    {
        path: '',
        component: MainBodyComponent,
    },
    {
      path: 'admin',
      component: SrAddContentComponent,
  },
  {
      path:'admin/article/:id',
      component:AddArtcleComponent
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