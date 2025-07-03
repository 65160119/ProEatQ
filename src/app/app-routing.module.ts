import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OTPComponent } from './pages/otp/otp.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {
  path: '',
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'signup',
      component: SignupComponent,
    },
    {
      path: 'otp',
      component: OTPComponent,
    },
    {
      path: 'suc',
      component: SuccessComponent,
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
