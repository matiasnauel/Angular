// MODULE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialToolsModule } from 'src/material.module';
// COMPONENTES
import { AppComponent } from './app.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { FormularioDatosComponent } from './Components/formulario-datos/formulario-datos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { FormularioReactivosComponent } from './Components/formulario-reactivos/formulario-reactivos.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioDatosComponent,
    FormularioReactivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialToolsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
