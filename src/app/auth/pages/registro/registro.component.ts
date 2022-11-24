import { EmailValidatorService } from './../../../shared/validator/email-validator.service';
import { ValidatorService } from './../../../shared/validator/validator.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { emailPat, nombreApe, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  miForm: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [Validators.required, Validators.pattern(this.vs.nombreApe)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPat)],
        [this.emailVali],
      ],
      username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [this.vs.camposIguales('password', 'password2')],
    }
  );

  // emailErrorMsg: string = "";

  get emailErrorMsg(): string {
    const errors = this.miForm.get('email')?.errors;
    if(errors?.["required"]){
        return "El email es obligatorio";
    }else if(errors?.["pattern"]){
      return "el email ingresado no es valido";

    } else if(errors?.["emailTomado"]){
      return "El mail ya esta registrado";
    }
    return "";
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailVali: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miForm.reset({
      nombre: 'Franco Fernandez',
      email: 'test1@test.com',
      username: 'example',
      password: '123456',
      password2: '123456',
    });
  }

  noValid(campo: string) {
    return this.miForm.get(campo)?.invalid && this.miForm.get(campo)?.touched;
  }

  mandarForm() {
    this.miForm.markAllAsTouched();
  }
}
