import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {SearchFormComponent} from './search-form/search-form.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent},
 { path: 'search', component: SearchFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
