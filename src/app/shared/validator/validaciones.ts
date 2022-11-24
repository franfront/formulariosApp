import { FormControl } from "@angular/forms";

export const nombreApe: string = "([a-zA-Z]+) ([a-zA-Z]+)";
export const emailPat: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerStrider = (arg: FormControl) =>{
    let val: string = arg.value?.trim().toLowerCase();
    if( val === "strider" ){
      return {
        noStrider: true
      }
  }
    return null
  }

