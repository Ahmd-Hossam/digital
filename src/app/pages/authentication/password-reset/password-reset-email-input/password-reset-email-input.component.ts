import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset-email-input',
  templateUrl: './password-reset-email-input.component.html',
  styleUrls: ['./password-reset-email-input.component.scss']
})
export class PasswordResetEmailInputComponent implements OnInit {
  form;
  isFormSubmitted : boolean = false
  isEmailExists : boolean = false
  constructor() { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")])),
    })
  }

  get email() {
    return <FormArray>this.form.get('email')
  }

  handleSubmit(){
    this.isFormSubmitted = true
    if(this.form.valid){
      
    }
  }

}
