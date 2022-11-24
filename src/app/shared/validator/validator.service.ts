import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public nombreApe: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  public emailPat: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  constructor() { }

  noPuedeSerStrider(arg: FormControl): ValidationErrors | null {
    let val: string = arg.value?.trim().toLowerCase();
    if( val === "strider" ){
      return {
        noStrider: true
      }
  }
    return null
  }

  camposIguales(pass1: string, pass2: string){
    return (control: AbstractControl): ValidationErrors | null =>{
      const pass_one = control.get(pass1)?.value;
      const pass_two = control.get(pass2)?.value;
      if(pass_one !== pass_two){
        control.get(pass2)?.setErrors({noIguales: true});
        return {noIguales: true}
      }else{
        control.get(pass2)?.setErrors(null)
      }
      return null;
    }
  }


}
