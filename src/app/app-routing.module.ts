import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioDatosComponent } from './Components/formulario-datos/formulario-datos.component';
import { FormularioReactivosComponent } from './Components/formulario-reactivos/formulario-reactivos.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

const routes: Routes = [
  {path:"Fechas",component:FormularioComponent},
  {path:"Formulario",component:FormularioDatosComponent},
  {path:"Formulario-Reactivo",component:FormularioReactivosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
