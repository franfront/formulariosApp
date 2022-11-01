import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miForm.reset({...this.persona, terminos: false});


    this.miForm.valueChanges.subscribe(({terminos, ...rest}) => {
      
      this.persona = rest;
    })

    // this.miForm.valueChanges.subscribe(form => {
    //   delete form.terminos
    //   this.persona = form;
    // })

    // this.miForm.get("terminos")?.valueChanges.subscribe(cond =>{
    //   console.log(cond)
    // })
  }

  miForm: FormGroup = this.fb.group({
    genero: ["M", Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]

  })

  persona = {
    genero: "F",
    notificaciones: true
  }


  guardar(){

    let formValue = {...this.miForm.value}
    delete formValue.terminos;
    this.persona = formValue;
  }


}
