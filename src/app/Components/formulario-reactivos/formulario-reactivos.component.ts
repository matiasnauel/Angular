import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.scss']
})
export class FormularioReactivosComponent implements OnInit {

  forma:FormGroup;

  constructor(
    private fb : FormBuilder,
    private validadores : ValidadoresService
  ) {
    this.createForm();
    this.loadForm();
    this.cargarListener()
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
      apellido:['',[Validators.required,Validators.minLength(5)]],
      correo:  ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),this.validadores.noCorreo]],
      usuario:['',,this.validadores.existeUsuario],
      direccion: this.fb.group({
        distrito:['',Validators.required],
        ciudad: ['',Validators.required]
      }),
      pasatiempos:this.fb.array([]),
      pass1:['',Validators.required],
      pass2:['',Validators.required]
    },
    {
      validators:[this.validadores.passwordIguales('pass1','pass2')]
    })
  }
  cargarListener()
  {
    this.forma.valueChanges.subscribe(cambio => {
      console.log(cambio)
    })
  }
  loadForm(){
    // this.forma.reset({
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
  pass2NoValido()
  {
    const pass1 = this.forma.get('pass1').value;
    const pass2= this.forma.get('pass2').value;
    return (pass1 === pass2) ? false : true;
  }
  UsuarioNoValido()
  {

  }
  borrarPasatiempo(i:number)
  {
    this.pasatiempos.removeAt(i)
  }
  agregarPasatiempo()
  {
    this.pasatiempos.push(this.fb.control(''))
  }
  gurdar()
  {
    if(this.forma.invalid)
    {
      Object.values(this.forma.controls).forEach(control => {
        console.log(control)
        if(control instanceof FormGroup)
        {
          Object.values(control).forEach(control => control?.markAsTouched())
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
