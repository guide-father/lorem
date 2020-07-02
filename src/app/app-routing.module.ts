import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: "", component: ContainerComponent, pathMatch: 'full'

  },
  {
    path: "terms-conditions", component: TermsComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "**", redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
