import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { UsuariosService } from './usuarios.service';
import { ResgistrarComponent } from './resgistrar/resgistrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ResgistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
