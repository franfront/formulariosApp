import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  // miForm: FormGroup = new FormGroup({
  //   titulo: new FormControl("Así habló Zaratustra"),
  //   precio: new FormControl(2500),
  //   existencias: new FormControl(10)

  // })

  ngOnInit(): void {
      this.miForm.reset({
        nombre: "Así habló zaratustra",
        precio: 2500,
      })
  }

  miForm: FormGroup = this.fb.group({
    titulo: ["", [Validators.required, Validators.minLength(3)] ],
    precio: [, [ Validators.required, Validators.min(1)]],
    existencias: [, [ Validators.required, Validators.min(1)]],

  })

  campoValid(campo: string){
    return this.miForm.controls[campo].errors && this.miForm.controls[campo].touched
  }
 
  guardar(){
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return  
    }
    console.log(this.miForm.value);
    this.miForm.reset();
  }

}
