import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { ResgistrarComponent } from './resgistrar/resgistrar.component';
import { LibrosComponent } from './libros/libros.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes:Routes=[
  {path:'',component:ResgistrarComponent},
  {path:'Home',component:LibrosComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    ResgistrarComponent,
    LibrosComponent,
    MenuComponent,
    ResgistrarComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
