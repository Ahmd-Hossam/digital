import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset-set-password',
  templateUrl: './password-reset-set-password.component.html',
  styleUrls: ['./password-reset-set-password.component.scss']
})
export class PasswordResetSetPasswordComponent implements OnInit {
  form;
  isFormSubmitted : boolean = false
  constructor() { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      passwordConfirm: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    },this.passwordMatchValidator)
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
       ? null : {'mismatch': true};
  }

  get password() {
    return <FormArray>this.form.get('password')
  }
  get passwordConfirm() {
    return <FormArray>this.form.get('passwordConfirm')
  }

  handleSubmit(){
    this.isFormSubmitted = true
    if(this.form.valid){
    }
  }


}
