import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './password.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordComponent,
    // children: [
    //   { path: 'random-password-generator', component: PasswordComponent },
    //   { path: 'advanced-password-generator', component: PasswordComponent },
    //   { path: 'password-strength-test', component: PasswordComponent },
    // ]
  },
  // {
  //   path: '',
  //   redirectTo: 'random-password-generator',
  //   pathMatch: 'full'
  // }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
