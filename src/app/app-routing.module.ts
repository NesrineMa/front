import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sec1Component } from './sec1/sec1.component';
import { HomeComponent } from './home/home.component';
import { TextilesComponent } from './textiles/textiles.component';
import { MecaComponent } from './meca/meca.component';
import { ElectroComponent } from './electro/electro.component';
import { DiversComponent } from './divers/divers.component';
import { CuirComponent } from './cuir/cuir.component';
import { ChimiComponent } from './chimi/chimi.component';
import { CeramicComponent } from './ceramic/ceramic.component';
import { AgroComponent } from './agro/agro.component';


const routes: Routes = [
  {path: 'sec1', component: Sec1Component},
  {path: 'home', component: HomeComponent},
  {path: 'textiles', component: TextilesComponent},
  {path: 'mecanique', component: MecaComponent},
  {path: 'electro', component: ElectroComponent},
  {path: 'divers', component: DiversComponent},
  {path: 'cuir', component: CuirComponent},
  {path: 'chimie', component: ChimiComponent},
  {path: 'ceramic', component: CeramicComponent},
  {path: 'agro', component: AgroComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
