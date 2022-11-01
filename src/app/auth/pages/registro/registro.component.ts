import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApe: string = "([a-zA-Z]+) ([a-zA-Z]+)";
  emailPat: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miForm: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.pattern(this.nombreApe)]],
    email: ["", [Validators.required, Validators.pattern(this.emailPat)]]

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miForm.reset({
      nombre: "Franco Fernandez"
    })
  }

  noValid(campo: string){
    return this.miForm.get(campo)?.invalid && this.miForm.get(campo)?.touched;
  }

  mandarForm(){
    this.miForm.markAllAsTouched()
  }

}
