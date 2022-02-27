import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValiadate{
    [s:string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario(control:FormControl) : Promise<ErrorValiadate> | Observable<ErrorValiadate> 
  {
    if(!control.value)
    {
      return Promise.resolve(null);
    }
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          if(control.value === 'strider')
          {
             resolve({existe:true})
          }
          else{
            resolve(null)
          }
        }, 3500);
      });[]
  }


  noCorreo(control:FormControl): ErrorValiadate
  {
    if(control.value?.toLowerCase() === "ayala@gmail.com")
    {
      return {
        noCorreo :true 
      }
    }
    return null;
 
   
  }
  passwordIguales(pass1:string,pass2:string)
  {
    return (formgroup:FormGroup) => 
    {
        const pass1Control = formgroup.controls[pass1];
        const pass2Control = formgroup.controls[pass2];
        if(pass1Control.value === pass2Control.value)
        {
          pass2Control.setErrors(null);
        }
        else{
          pass2Control.setErrors({noEsIgual:true})
        }
    }
  }

}
