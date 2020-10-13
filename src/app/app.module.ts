import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { MatTableModule } from '@angular/material/table'  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sec1Component } from './sec1/sec1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TextilesComponent } from './textiles/textiles.component';
import { CeramicComponent } from './ceramic/ceramic.component';
import { AgroComponent } from './agro/agro.component';
import { MecaComponent } from './meca/meca.component';
import { ElectroComponent } from './electro/electro.component';
import { ChimiComponent } from './chimi/chimi.component';
import { CuirComponent } from './cuir/cuir.component';
import { DiversComponent } from './divers/divers.component';

@NgModule({
  declarations: [
    AppComponent,
    Sec1Component,
    HomeComponent,
    TextilesComponent,
    CeramicComponent,
    AgroComponent,
    MecaComponent,
    ElectroComponent,
    ChimiComponent,
    CuirComponent,
    DiversComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    NgbModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
