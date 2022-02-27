import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ValidateToDate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    let today = new Date(value).toLocaleDateString().split("/");
    let dd = parseInt(today[0]);
    let mm = parseInt(today[1]);
    let yyyy = parseInt(today[2]);
    //-----------------------------------------------//
    let splitDateNow = new Date().toLocaleDateString().split("/");

    let DD = parseInt(splitDateNow[0])
    let MM = parseInt(splitDateNow[1])
    let YYYY = parseInt(splitDateNow[2]);

    if (yyyy === YYYY) {
      if (mm >= MM) {

        if (dd >= DD) {
          return null
        }
        else {
          return { DayInvalid: true }
        }
      }
      else {
        return { MonthInvalid: true }
      }
    }
    else {
      return { YearInvalid: true }
    }


  }
}
export function ValidateToDateFromDate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.get("fromDate")?.value;
    if (!value) {
      return null;
    }
    const fechainicio = control.get("toDate")?.value;
    const fechafin = value;
    const dateF = new Date(fechafin);
    var today = new Date(fechainicio);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = String(today.getFullYear());

    //fecha de fin es mayor o igual a la fecha de inicio

    if (fechafin !== null || undefined) {

      var filtFin = dateF.toLocaleDateString().split("/");
      var dia = filtFin[1]
      var mes = filtFin[0]
      var año = filtFin[2]



      if (parseInt(año) == parseInt(yyyy)) {
        //mes
        if (parseInt(mes) > parseInt(mm)) {

 
          if (parseInt(dia) >= parseInt(dd) || parseInt(dia) <= parseInt(dd)) {
            return null;
          }
          else {

            return { Errro: true }
          }
        }
        if (parseInt(mes) === parseInt(mm)) {
      
          if (parseInt(dia) > parseInt(dd)) {
            return null;
          }
          else {

            return { Error: true }
          }
        }
        if (parseInt(mes) < parseInt(mm)) {
          return { Error: true }
        }

      }
      else {

        return { Error: true }
      }
    }
    return null;

  }
}