import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
    favoritos: this.fb.array([
      ['GTA V', Validators.required],
      ['SIMS', Validators.required]
    ], Validators.required)

  })

  nuevoFavorito: FormControl = this.fb.control("", Validators.required)


  get favoritosArr(){
    return  this.miForm.get('favoritos') as FormArray;
  }


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

  agregarFavorito(){

    if(this.nuevoFavorito.invalid){
      return
    }

    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));

    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset()
  }

  borrar(index: number){

    this.favoritosArr.removeAt(index)



  }
 

}
