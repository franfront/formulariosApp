import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  constructor(private fb: FormBuilder) { }

  miForm: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.minLength(3)] ],

  })

  campoValid(campo: string, typeValidation: string): boolean{
    return this.miForm.controls[campo].errors?.[typeValidation] && this.miForm.controls[campo].touched;
  }

  guardar(){
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return  
    }
    console.log(this.miForm.value);
  }
 

}
