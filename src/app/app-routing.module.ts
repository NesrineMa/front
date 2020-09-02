import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sec1Component } from './sec1/sec1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'sec1', component: Sec1Component},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
