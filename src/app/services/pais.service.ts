import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map}  from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http : HttpClient) { }

  getPaises()
  {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all').pipe(
      map( (resp:any[]) =>  resp.map(pais =>({nombre: pais.name.common,codigo: pais.altSpellings[0]})))
    );
  }
}
