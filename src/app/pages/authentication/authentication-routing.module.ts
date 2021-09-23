import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordResetEmailInputComponent } from './password-reset/password-reset-email-input/password-reset-email-input.component';
import { PasswordResetEmailSentComponent } from './password-reset/password-reset-email-sent/password-reset-email-sent.component';
import { PasswordResetSetPasswordComponent } from './password-reset/password-reset-set-password/password-reset-set-password.component';
import { PasswordResetSuccessComponent } from './password-reset/password-reset-success/password-reset-success.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Login' } // This is the page title showing in the tab (in browser)
  },
  {
    path: 'password-reset',
    component: PasswordResetEmailInputComponent,
    data: { title: 'Password Reset' } // This is the page title showing in the tab (in browser)
  },
  {
    path: 'reset-email',
    component: PasswordResetEmailSentComponent,
    data: { title: 'Password Reset' } // This is the page title showing in the tab (in browser)
  },
  {
    path: 'set-password',
    component: PasswordResetSetPasswordComponent,
    data: { title: 'Password Reset' } // This is the page title showing in the tab (in browser)
  },
  {
    path: 'password-success',
    component: PasswordResetSuccessComponent,
    data: { title: 'Password Reset' } // This is the page title showing in the tab (in browser)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
