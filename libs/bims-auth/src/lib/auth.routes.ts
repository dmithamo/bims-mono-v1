import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { OtpFormComponent } from './otp-form/otp-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'login/otp',
    component: OtpFormComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'register/otp',
    component: OtpFormComponent,
  },
];
