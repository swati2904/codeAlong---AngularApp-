import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
//import { empty, from } from 'rxjs';
import {DataBindingComponent} from './data-binding/data-binding.component';
const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'data-binding',component: DataBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
