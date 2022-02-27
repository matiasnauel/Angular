import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ValidateToDate, ValidateToDateFromDate } from 'src/app/Tools/Date/ValidateDate';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formData : FormGroup;
  formData2 : FormGroup;
  constructor(
    private formbuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.init_form();
    this.init_form2();
  }

  init_form()
  {
    this.formData = this.formbuilder.group({
      toDate: new FormControl('',{
        validators:[
          ValidateToDate(),
          Validators.required
        ],
        updateOn: 'change'
      }),
      fromDate: new FormControl('')
    },
    {
      validators:[ValidateToDateFromDate()]
    })
  }
  init_form2()
  {
    this.formData2 = this.formbuilder.group({
      toDate2: new FormControl('',{
        validators:[
          ValidateToDate(),
          Validators.required
        ],
        updateOn: 'change'
      }),
      fromDate: new FormControl('')
    })
  }
}
