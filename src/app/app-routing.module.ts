import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'password',
    redirectTo: 'password/random-password-generator',
    pathMatch: 'full'
  },
  {
    path: 'password/:mode',
    loadChildren: () => import('./password/password.module').then(m => m.PasswordModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
