import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PasswordResetNavbarComponent } from './password-reset/password-reset-navbar/password-reset-navbar.component';
import { PasswordResetEmailInputComponent } from './password-reset/password-reset-email-input/password-reset-email-input.component';
import { PasswordResetSetPasswordComponent } from './password-reset/password-reset-set-password/password-reset-set-password.component';
import { PasswordResetSuccessComponent } from './password-reset/password-reset-success/password-reset-success.component';
import { PasswordResetEmailSentComponent } from './password-reset/password-reset-email-sent/password-reset-email-sent.component';


@NgModule({
  declarations: [LoginComponent, PasswordResetNavbarComponent, PasswordResetEmailInputComponent, PasswordResetSetPasswordComponent, PasswordResetSuccessComponent, PasswordResetEmailSentComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
