import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.scss']
})
export class FormularioReactivosComponent implements OnInit {

  forma:FormGroup;

  constructor(
    private fb : FormBuilder
  ) {
    this.createForm();
    this.loadForm();
  }

  ngOnInit(): void { 
   
  }

  get pasatiempos() : FormArray
  {
    return <FormArray>this.forma.get('pasatiempos') as FormArray;
  }
 
  createForm(){
    this.forma = this.fb.group({
      nombre:  ['',[Validators.required,Validators.minLength(5)]],
      apellido:['',Validators.required,Validators.minLength(5)],
      correo:  ['',Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      direccion: this.fb.group({
        distrito:['',Validators.required],
        ciudad: ['',Validators.required]
      }),
      pasatiempos:this.fb.array([
        [],[],[],[],[]
      ])
    })
  }
  loadForm(){
    // this.forma.setValue({
    //   nombre: "matias",
    //   apellido: "ayala",
    //   correo: "ayala@gmail.com",
    //   direccion: {
    //     distrito: "florencio varela",
    //     ciudad: "Buenos aires"
    //   }
    // })
  }
  campoNoValido(campo: string) {
    return this.forma.get(campo)?.invalid && this.forma.get(campo)?.touched;
  }
  gurdar()
  {
    if(this.forma.invalid)
    {
      Object.values(this.forma.controls).forEach(control => {
        console.log(control)
        if(control instanceof FormGroup)
        {
          Object.values(control).forEach(control => control.markAsTouched())
        }
        else{
          control.markAsTouched();
        }
      })
      return;
    }
    this.forma.reset();
  }

}
