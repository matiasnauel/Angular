import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-formulario-datos',
  templateUrl: './formulario-datos.component.html',
  styleUrls: ['./formulario-datos.component.scss']
})
export class FormularioDatosComponent implements OnInit {

  usuario =
  {
    nombre:"matias",
    email: "matias@gmail.com",
    apellido:"ayala",
    pais:"",
    genero:"M"
  }
  paises: any[] = [];
  constructor(
    private _paisesSerivices: PaisService
  ) { }

  ngOnInit(): void {
    this._paisesSerivices.getPaises().subscribe(e  => {
      this.paises =e;
      this.paises.unshift({
        nombre:"Seleccione un pais",
        codigo:""
      })
    })
  }
  guardar(event:NgForm):void{
    if(event.invalid)
    {
      Object.values(event.controls).forEach(control => {
        control.markAsTouched();
      })
      return;
    }
     console.log(event.value)
  }

}
