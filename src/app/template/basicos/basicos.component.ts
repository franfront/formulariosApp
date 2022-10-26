import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [ 
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild("miForm") miFormulario!: NgForm;

  initForm = {
    producto: "",
    precio: 0,
    existencias: 0

  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario)

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }

  nameValid(): boolean{
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched
  }

  priceValid(){
    return this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value <= 0;

  }

}
